import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../database/firebase';
import { Usuario } from '../../../interfaces/usuario';
import { Microservicio } from '../../../interfaces/microservicio';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nuevo-despliegue',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTooltipModule],
  templateUrl: './nuevoDespliegue.component.html',
})
export class NuevoDespliegueComponent implements OnInit, OnChanges {
  @Input() campos: {
    valor: string;
    editando: boolean;
    confirmarEliminar?: boolean;
  }[] = [];
  @Input() despliegue: any;
  @Input() ambiente: string = '';
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();
  @Output() editar = new EventEmitter<any>();

  usuarios: Usuario[] = [];
  microservicios: Microservicio[] = [];

  responsable: string = '';
  tag: string = '';
  microservicio: string = '';
  auditor: string = '';
  fecha: string = '';
  responsableChecklistSeleccionado: boolean[] = [];
  auditorChecklistSeleccionado: boolean[] = [];
  despliegueEditado: any = {};
  editando: boolean = false;

  loadingUsuarios: boolean = true;
  loadingMicroservicios: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarUsuarios();
    this.cargarMicroservicios();

    if (this.despliegue) {
      this.inicializarDespliegue();
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.ambiente) {
      this.loadingMicroservicios = true;
      await this.cargarMicroservicios();
    }
  }

  async cargarUsuarios() {
    const usuariosRef = collection(db, 'usuarios');
    const querySnapshot = await getDocs(usuariosRef);
    this.usuarios = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Usuario[];
    this.loadingUsuarios = false;
    this.cdr.detectChanges();
  }

  async cargarMicroservicios() {
    const microserviciosRef = collection(db, 'microservicios');
    const q = query(microserviciosRef, where('ambiente', '==', this.ambiente));
    const querySnapshot = await getDocs(q);
    this.microservicios = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Microservicio[];
    this.loadingMicroservicios = false;
    this.cdr.detectChanges();
  }

  inicializarDespliegue() {
    this.responsableChecklistSeleccionado = new Array(this.campos.length).fill(
      false
    );
    this.auditorChecklistSeleccionado = new Array(this.campos.length).fill(
      false
    );

    this.responsable = this.despliegue.responsable;
    this.tag = this.despliegue.tag;
    this.microservicio = this.despliegue.microservicio;
    this.auditor = this.despliegue.auditor;
    this.fecha = this.despliegue.fecha;

    if (this.despliegue.checklist && Array.isArray(this.despliegue.checklist)) {
      this.responsableChecklistSeleccionado = this.campos.map((campo) =>
        this.despliegue.checklist.some(
          (check: any) => check.valor === campo.valor && check.responsable
        )
      );
      this.auditorChecklistSeleccionado = this.campos.map((campo) =>
        this.despliegue.checklist.some(
          (check: any) => check.valor === campo.valor && check.auditor
        )
      );
    }

    this.despliegueEditado = {
      ...this.despliegue,
      responsable: this.responsable,
      tag: this.tag,
      microservicio: this.microservicio,
      auditor: this.auditor,
      fecha: this.fecha,
      responsableChecklistSeleccionado: this.responsableChecklistSeleccionado,
      auditorChecklistSeleccionado: this.auditorChecklistSeleccionado,
    };
    this.editando = true;
  }

  get todosMarcados(): boolean {
    return this.responsableChecklistSeleccionado.every((item) => item);
  }

  get inputsLlenos(): boolean {
    return (
      this.responsable.trim() !== '' &&
      this.tag.trim() !== '' &&
      this.microservicio.trim() !== '' &&
      this.fecha.trim() !== ''
    );
  }

  get todosResponsablesMarcados(): boolean {
    return (
      this.responsableChecklistSeleccionado.length === this.campos.length &&
      this.responsableChecklistSeleccionado.every((item) => item)
    );
  }

  get puedeGuardar(): boolean {
    return this.inputsLlenos && this.todosResponsablesMarcados;
  }

  checkResponsableStatus() {
    this.cdr.markForCheck();
  }

  guardarDatos() {
    if (this.editando) {
      this.despliegueEditado = {
        ...this.despliegueEditado,
        responsable: this.responsable,
        tag: this.tag,
        microservicio: this.microservicio,
        auditor: this.auditor,
        fecha: this.fecha,
        checklist: this.campos.map((campo, index) => ({
          valor: campo.valor,
          responsable: this.responsableChecklistSeleccionado[index],
          auditor: this.auditorChecklistSeleccionado[index] || null,
        })),
      };
      this.editar.emit(this.despliegueEditado);
    } else {
      const datos = {
        responsable: this.responsable,
        tag: this.tag,
        microservicio: this.microservicio,
        auditor: this.auditor,
        fecha: this.fecha,
        checklist: this.campos.map((campo, index) => ({
          valor: campo.valor,
          responsable: this.responsableChecklistSeleccionado[index],
          auditor: this.auditorChecklistSeleccionado[index] || null,
        })),
      };
      this.guardar.emit(datos);
    }
  }

  getUsuariosFiltradosParaResponsable() {
    return this.usuarios.filter(
      (usuario) => usuario.nombre + ' ' + usuario.apellido !== this.auditor
    );
  }

  getUsuariosFiltradosParaAuditor() {
    return this.usuarios.filter(
      (usuario) => usuario.nombre + ' ' + usuario.apellido !== this.responsable
    );
  }
}
