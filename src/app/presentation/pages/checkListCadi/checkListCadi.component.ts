import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NuevoDespliegueComponent } from '../../components/nuevoDespliegue/nuevoDespliegue.component';

@Component({
  selector: 'app-check-list-cadi',
  standalone: true,
  imports: [CommonModule, FormsModule, NuevoDespliegueComponent],
  templateUrl: './checkListCadi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckListCadiComponent implements OnInit {
  modalAbierto: boolean = false;
  modalNuevoDespliegueAbierto = false;
  campos: { valor: string; editando: boolean; confirmarEliminar?: boolean }[] =
    [];
  datosGuardados: any[] = [];
  pagedDatosGuardados: any[] = [];
  despliegueSeleccionado: any = null;
  esNuevoDespliegue: boolean = true;
  deploymentToDelete?: any = {
    auditor: null,
    checkList: null,
    fecha: null,
    id: null,
    microservicio: null,
    responsable: null,
    tag: null,
  };
  showConfirmDeleteModal = false;
  ambiente: string = 'CADI';
  itemsPerPage = 5;
  currentPage = 1;
  totalPages = 1;

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.cargarDespliegues(this.ambiente);
    await this.cargarDatos(this.ambiente);
  }

  async cargarDatos(ambiente: string) {
    const checklistRef = doc(
      collection(db, 'checklists'),
      `checklistCadi_${ambiente}`
    );
    const checklistSnap = await getDoc(checklistRef);
    if (checklistSnap.exists()) {
      const data = checklistSnap.data();
      if (data && 'campos' in data && Array.isArray(data['campos'])) {
        this.campos = data['campos'];
        this.cdr.markForCheck();
      } else {
        console.log(
          'La estructura de datos en Firestore es incorrecta o no contiene campos.'
        );
      }
    } else {
      console.log('No se encontraron datos en Firestore.');
    }
  }

  async cargarDespliegues(ambiente: string) {
    const desplieguesRef = collection(db, `nuevosDespliegues_${ambiente}`);
    const querySnapshot = await getDocs(desplieguesRef);
    this.datosGuardados = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    this.totalPages = Math.ceil(this.datosGuardados.length / this.itemsPerPage);
    this.actualizarPagina();
    this.cdr.markForCheck();
  }

  actualizarPagina() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedDatosGuardados = this.datosGuardados.slice(startIndex, endIndex);
  }

  cambiarItemsPorPagina() {
    this.totalPages = Math.ceil(this.datosGuardados.length / this.itemsPerPage);
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

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  agregarCampo() {
    this.campos.push({ valor: '', editando: true });
  }

  confirmarEliminar(index: number) {
    if (this.campos[index]?.confirmarEliminar) {
      this.eliminarCampo(index);
    } else {
      if (this.campos[index]) {
        this.campos[index].confirmarEliminar = true;
        const icono = document.getElementById('icono-' + index);
        if (icono) {
          icono.classList.add('text-red-500');
        }
        setTimeout(() => {
          if (icono) {
            icono.classList.remove('text-red-500');
          }
          if (this.campos[index]) {
            this.campos[index].confirmarEliminar = false;
          }
        }, 3000);
      }
    }
  }

  guardarCampo(index: number) {
    if (this.campos[index].valor.trim() !== '') {
      this.campos[index].editando = false;
      this.actualizarCampoEnFirestore('CADI');
    }
  }

  async actualizarCampoEnFirestore(ambiente: string) {
    const checklistRef = doc(
      collection(db, 'checklists'),
      `checklistCadi_${ambiente}`
    );
    try {
      await setDoc(checklistRef, { campos: this.campos, ambiente });
      console.log('Cambios guardados en Firestore.');
    } catch (error) {
      console.error('Error guardando los cambios en Firestore:', error);
    }
  }

  editarCampo(index: number) {
    this.campos[index].editando = true;
  }

  eliminarCampo(index: number) {
    this.campos.splice(index, 1);
    this.actualizarCampoEnFirestore('CADI');
  }

  async guardarCambios() {
    this.campos = this.campos.map((campo, index) => ({
      ...campo,
      id: index + 1,
    }));
    this.cerrarModal();
    await this.actualizarCampoEnFirestore('CADI');
  }

  abrirNuevoDespliegueModal() {
    this.modalNuevoDespliegueAbierto = true;
    this.despliegueSeleccionado = null;
    this.esNuevoDespliegue = true;
  }

  cerrarModalNuevoDespliegue() {
    this.modalNuevoDespliegueAbierto = false;
  }

  async guardarNuevoDespliegue(datos: any, ambiente: string) {
    console.log(datos);

    try {
      const nuevosDesplieguesRef = collection(
        db,
        `nuevosDespliegues_${ambiente}`
      );
      const docRef = await addDoc(nuevosDesplieguesRef, { ...datos, ambiente });
      console.log('Nuevo despliegue guardado con ID: ', docRef.id);
      this.datosGuardados.push({ ...datos, id: docRef.id });
      this.totalPages = Math.ceil(
        this.datosGuardados.length / this.itemsPerPage
      );
      this.actualizarPagina();
      this.cdr.markForCheck();
      this.cerrarModalNuevoDespliegue();
    } catch (error) {
      console.error('Error guardando el nuevo despliegue en Firestore:', error);
    }
  }

  async editarNuevoDespliegue(datos: any, ambiente: string) {
    try {
      const despliegueDocRef = doc(
        db,
        `nuevosDespliegues_${ambiente}`,
        datos.id
      );
      await setDoc(despliegueDocRef, datos);
      console.log('Despliegue editado con ID: ', datos.id);

      const index = this.datosGuardados.findIndex(
        (item) => item.id === datos.id
      );
      if (index > -1) {
        this.datosGuardados[index] = datos;
      }
      this.actualizarPagina();
      this.cdr.markForCheck();
      this.cerrarModalNuevoDespliegue();
    } catch (error) {
      console.error('Error editando el despliegue en Firestore:', error);
    }
  }

  async eliminarDespliegue(index: number, ambiente: string) {
    try {
      const id = this.deploymentToDelete.id;
      const docRef = doc(db, `nuevosDespliegues_${ambiente}`, id);
      await deleteDoc(docRef);
      this.datosGuardados = this.datosGuardados.filter((_, i) => i !== index);
      this.totalPages = Math.ceil(
        this.datosGuardados.length / this.itemsPerPage
      );
      this.actualizarPagina();
      console.log('Despliegue eliminado con ID: ', id);
      this.showConfirmDeleteModal = false;
      this.cdr.markForCheck();
    } catch (error) {
      console.error('Error eliminando el despliegue en Firestore:', error);
    }
  }

  confirmDeleteDeployment(index: number) {
    this.deploymentToDelete = this.datosGuardados[index];
    console.log(this.deploymentToDelete.id);
    this.showConfirmDeleteModal = true;
  }

  editarDespliegue(index: number) {
    const despliegue = this.datosGuardados[index];
    console.log(despliegue);
    this.despliegueSeleccionado = despliegue;
    this.esNuevoDespliegue = false;
    console.log(this.despliegueSeleccionado);
    this.modalNuevoDespliegueAbierto = true;
  }
}
