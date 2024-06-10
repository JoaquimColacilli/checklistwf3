import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsuariosComponent implements OnInit {
  public modalNuevoUsuarioAbierto = false;
  public showConfirmDeleteModal = false;
  public usuarios: Usuario[] = [];
  public pagedUsuarios: Usuario[] = [];
  public nuevoUsuario: Usuario = { nombre: '', apellido: '', fechaAlta: '' };
  public usuarioSeleccionado: Usuario | null = null;
  public userToDelete: Usuario | null = null;
  public itemsPerPage = 5;
  public currentPage = 1;
  public totalPages = 1;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.cargarUsuarios();
  }

  async cargarUsuarios() {
    const usuariosRef = collection(db, 'usuarios');
    const querySnapshot = await getDocs(usuariosRef);
    this.usuarios = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Usuario[];
    this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
    this.actualizarPagina();
    this.cdr.markForCheck();
  }

  actualizarPagina() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedUsuarios = this.usuarios.slice(startIndex, endIndex);
  }

  cambiarItemsPorPagina() {
    this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
    this.currentPage = 1;
    this.actualizarPagina();
  }

  paginaAnterior() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.actualizarPagina();
    }
  }

  paginaSiguiente() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.actualizarPagina();
    }
  }

  abrirNuevoUsuarioModal() {
    this.modalNuevoUsuarioAbierto = true;
    this.usuarioSeleccionado = null;
    this.nuevoUsuario = { nombre: '', apellido: '', fechaAlta: '' };
  }

  cerrarModalNuevoUsuario() {
    this.modalNuevoUsuarioAbierto = false;
  }

  async guardarUsuario() {
    if (this.usuarioSeleccionado) {
      this.nuevoUsuario.fechaAlta = new Date().toISOString().split('T')[0];
      await this.actualizarUsuario();
    } else {
      this.nuevoUsuario.fechaAlta = new Date().toISOString().split('T')[0];
      await this.agregarNuevoUsuario();
    }
    this.cerrarModalNuevoUsuario();
  }

  async agregarNuevoUsuario() {
    try {
      const usuariosRef = collection(db, 'usuarios');
      const docRef = await addDoc(usuariosRef, this.nuevoUsuario);
      this.usuarios.push({ ...this.nuevoUsuario, id: docRef.id });
      this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
      this.actualizarPagina();
      this.cdr.markForCheck();
    } catch (error) {
      console.error('Error guardando el nuevo usuario en Firestore:', error);
    }
  }

  async actualizarUsuario() {
    if (!this.usuarioSeleccionado) {
      return;
    }
    try {
      const usuarioDocRef = doc(db, 'usuarios', this.usuarioSeleccionado.id!);
      await setDoc(usuarioDocRef, { ...this.nuevoUsuario });
      const index = this.usuarios.findIndex(
        (item) => item.id === this.usuarioSeleccionado!.id
      );
      if (index > -1) {
        this.usuarios[index] = {
          ...this.nuevoUsuario,
          id: this.usuarioSeleccionado!.id,
        };
      }
      this.actualizarPagina();
      this.cdr.markForCheck();
    } catch (error) {
      console.error('Error actualizando el usuario en Firestore:', error);
    }
  }

  editarUsuario(index: number) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.usuarioSeleccionado = this.usuarios[startIndex + index];
    this.nuevoUsuario = { ...this.usuarioSeleccionado };
    this.modalNuevoUsuarioAbierto = true;
  }

  confirmDeleteUser(index: number) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.userToDelete = this.usuarios[startIndex + index];
    this.showConfirmDeleteModal = true;
  }

  async eliminarUsuario() {
    if (this.userToDelete) {
      try {
        const id = this.userToDelete.id!;
        const docRef = doc(db, 'usuarios', id);
        await deleteDoc(docRef);
        this.usuarios = this.usuarios.filter((user) => user.id !== id);
        this.totalPages = Math.ceil(this.usuarios.length / this.itemsPerPage);
        this.actualizarPagina();
        this.showConfirmDeleteModal = false;
        this.cdr.markForCheck();
      } catch (error) {
        console.error('Error eliminando el usuario en Firestore:', error);
      }
    }
  }
}
