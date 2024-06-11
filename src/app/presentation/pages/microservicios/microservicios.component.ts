import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Microservicio } from '../../../interfaces/microservicio';

@Component({
  selector: 'app-microservicios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './microservicios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MicroserviciosComponent implements OnInit {
  public modalNuevoMicroservicioAbierto = false;
  public showConfirmDeleteModal = false;
  public microservicios: Microservicio[] = [];
  public pagedMicroservicios: Microservicio[] = [];
  public nuevoMicroservicio: Microservicio = {
    nombre: '',
    ambiente: 'WF3/Actas Digitales',
    fechaAlta: '',
  };
  public microservicioSeleccionado: Microservicio | null = null;
  public microservicioToDelete: Microservicio | null = null;
  public itemsPerPage = 5;
  public currentPage = 1;
  public totalPages = 1;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.cargarMicroservicios();
  }

  async cargarMicroservicios() {
    const microserviciosRef = collection(db, 'microservicios');
    const querySnapshot = await getDocs(microserviciosRef);
    this.microservicios = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Microservicio[];
    this.totalPages = Math.ceil(this.microservicios.length / this.itemsPerPage);
    this.actualizarPagina();
    this.cdr.markForCheck();
  }

  actualizarPagina() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedMicroservicios = this.microservicios.slice(startIndex, endIndex);
  }

  cambiarItemsPorPagina() {
    this.totalPages = Math.ceil(this.microservicios.length / this.itemsPerPage);
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

  abrirNuevoMicroservicioModal() {
    this.modalNuevoMicroservicioAbierto = true;
    this.microservicioSeleccionado = null;
    this.nuevoMicroservicio = {
      nombre: '',
      ambiente: 'WF3/Actas Digitales',
      fechaAlta: '',
    };
  }

  cerrarModalNuevoMicroservicio() {
    this.modalNuevoMicroservicioAbierto = false;
  }

  async guardarMicroservicio() {
    if (this.microservicioSeleccionado) {
      this.nuevoMicroservicio.fechaAlta = new Date()
        .toISOString()
        .split('T')[0];
      await this.actualizarMicroservicio();
    } else {
      this.nuevoMicroservicio.fechaAlta = new Date()
        .toISOString()
        .split('T')[0];
      await this.agregarNuevoMicroservicio();
    }
    this.cerrarModalNuevoMicroservicio();
  }

  async agregarNuevoMicroservicio() {
    try {
      const microserviciosRef = collection(db, 'microservicios');
      const docRef = await addDoc(microserviciosRef, this.nuevoMicroservicio);
      this.microservicios.push({ ...this.nuevoMicroservicio, id: docRef.id });
      this.totalPages = Math.ceil(
        this.microservicios.length / this.itemsPerPage
      );
      this.actualizarPagina();
      this.cdr.markForCheck();
    } catch (error) {
      console.error(
        'Error guardando el nuevo microservicio en Firestore:',
        error
      );
    }
  }

  async actualizarMicroservicio() {
    if (!this.microservicioSeleccionado) {
      return;
    }
    try {
      const microservicioDocRef = doc(
        db,
        'microservicios',
        this.microservicioSeleccionado.id!
      );
      await setDoc(microservicioDocRef, { ...this.nuevoMicroservicio });
      const index = this.microservicios.findIndex(
        (item) => item.id === this.microservicioSeleccionado!.id
      );
      if (index > -1) {
        this.microservicios[index] = {
          ...this.nuevoMicroservicio,
          id: this.microservicioSeleccionado!.id,
        };
      }
      this.actualizarPagina();
      this.cdr.markForCheck();
    } catch (error) {
      console.error('Error actualizando el microservicio en Firestore:', error);
    }
  }

  editarMicroservicio(index: number) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.microservicioSeleccionado = this.microservicios[startIndex + index];
    this.nuevoMicroservicio = { ...this.microservicioSeleccionado };
    this.modalNuevoMicroservicioAbierto = true;
  }

  confirmDeleteMicroservicio(index: number) {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.microservicioToDelete = this.microservicios[startIndex + index];
    this.showConfirmDeleteModal = true;
  }

  async eliminarMicroservicio() {
    if (this.microservicioToDelete) {
      try {
        const id = this.microservicioToDelete.id!;
        const docRef = doc(db, 'microservicios', id);
        await deleteDoc(docRef);
        this.microservicios = this.microservicios.filter(
          (microservicio) => microservicio.id !== id
        );
        this.totalPages = Math.ceil(
          this.microservicios.length / this.itemsPerPage
        );
        this.actualizarPagina();
        this.showConfirmDeleteModal = false;
        this.cdr.markForCheck();
      } catch (error) {
        console.error('Error eliminando el microservicio en Firestore:', error);
      }
    }
  }
}
