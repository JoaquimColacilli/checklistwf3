import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-nuevo-despliegue',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTooltipModule],
  templateUrl: './nuevoDespliegue.component.html',
})
export class NuevoDespliegueComponent implements OnInit {
  @Input() campos: {
    valor: string;
    editando: boolean;
    confirmarEliminar?: boolean;
  }[] = [];
  @Input() despliegue: any;
  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();
  @Output() editar = new EventEmitter<any>();

  responsable: string = '';
  tag: string = '';
  microservicio: string = '';
  auditor: string = '';
  fecha: string = '';
  responsableChecklistSeleccionado: boolean[] = [];
  auditorChecklistSeleccionado: boolean[] = [];
  despliegueEditado: any = {};
  editando: boolean = false;

  ngOnInit(): void {
    this.responsableChecklistSeleccionado = new Array(this.campos.length).fill(
      false
    );
    this.auditorChecklistSeleccionado = new Array(this.campos.length).fill(
      false
    );

    if (this.despliegue) {
      this.responsable = this.despliegue.responsable;
      this.tag = this.despliegue.tag;
      this.microservicio = this.despliegue.microservicio;
      this.auditor = this.despliegue.auditor;
      this.fecha = this.despliegue.fecha;

      if (
        this.despliegue.checklist &&
        Array.isArray(this.despliegue.checklist)
      ) {
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
  }

  get todosMarcados(): boolean {
    return this.responsableChecklistSeleccionado.every((item) => item);
  }

  get inputsLlenos(): boolean {
    return (
      this.responsable.trim() !== '' &&
      this.tag.trim() !== '' &&
      this.microservicio.trim() !== '' &&
      this.auditor.trim() !== '' &&
      this.fecha.trim() !== ''
    );
  }

  get puedeGuardar(): boolean {
    return this.todosMarcados && this.inputsLlenos;
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
          auditor: this.auditorChecklistSeleccionado[index],
        })),
      };
      console.log(this.despliegueEditado);
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
          auditor: this.auditorChecklistSeleccionado[index],
        })),
      };
      this.guardar.emit(datos);
    }
  }
}
