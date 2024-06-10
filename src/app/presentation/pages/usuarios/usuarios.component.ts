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
  public nuevoUsuario: Usuario = { nombre: '', apellido: '', fechaAlta: '' };
  public usuarioSeleccionado: Usuario | null = null;
  public userToDelete: Usuario | null = null;

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
    this.cdr.markForCheck();
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
      this.cdr.markForCheck();
    } catch (error) {
      console.error('Error actualizando el usuario en Firestore:', error);
    }
  }

  editarUsuario(index: number) {
    this.usuarioSeleccionado = this.usuarios[index];
    this.nuevoUsuario = { ...this.usuarioSeleccionado }; // Cargar los datos en el formulario
    this.modalNuevoUsuarioAbierto = true;
  }

  confirmDeleteUser(index: number) {
    this.userToDelete = this.usuarios[index];
    this.showConfirmDeleteModal = true;
  }

  async eliminarUsuario() {
    if (this.userToDelete) {
      try {
        const id = this.userToDelete.id!;
        const docRef = doc(db, 'usuarios', id);
        await deleteDoc(docRef);
        this.usuarios = this.usuarios.filter((user) => user.id !== id);
        this.showConfirmDeleteModal = false;
        this.cdr.markForCheck();
      } catch (error) {
        console.error('Error eliminando el usuario en Firestore:', error);
      }
    }
  }
}
