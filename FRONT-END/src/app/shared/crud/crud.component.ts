import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    ToggleButtonModule
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CRUDComponent {

  // Configuraciones de la tabla y permisos
  @Input() canSeeDetail: boolean = true;
  @Input() canDelete: boolean = true;
  @Input() canCancel: boolean = false;
  @Input() canExport: boolean = true;
  @Input() actions: boolean = true;

  // Datos de entrada para la tabla
  @Input() items: any[] = [];
  @Input() columns: { field: string, header: string }[] = [];

  // Funciones del CRUD
  @Output() deleteAll = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();
  @Output() delete = new EventEmitter<any>();
  @Output() detail = new EventEmitter<any>();
  @Output() search = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<any>();


  // Parámetro de búsqueda
  searchQuery = '';

  constructor() {}

  onExport() {
    this.export.emit();
  }

  onDelete(item: any) {
    this.delete.emit(item);
  }

  onCancel(item: any) {
    this.cancel.emit(item);
  }

  onDetail(item: any) {
    this.detail.emit(item);
  }
  
  onSearch() {
    this.search.emit(this.searchQuery);
  }

  clearSearch() {
    this.searchQuery = '';
    this.onSearch();
  }  

}
