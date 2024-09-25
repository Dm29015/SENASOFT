// import { ToastrService } from 'ngx-toastr';

import { SHARED_IMPORTS } from '../../shared/shared-imports'; // Archivo para las importaciones generales
// import { AlertsService } from '../../shared/alerts/alerts.service';



import { Component, OnInit } from '@angular/core';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { Cups } from './cups.model';
import { CupService } from './cups.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cups',
  standalone: true,
  imports: [
    CRUDComponent,
    CommonModule,
    FormsModule,
    TableModule,
    SHARED_IMPORTS
  ],
  templateUrl: './cups.component.html'
})

export class CupsComponent implements OnInit{

    cups: Cups[] = [];
    filteredCups: Cups[] = [];
    historyItems: any[] = [];
  
    colums: { field: string, header: string }[] = [
      { field: 'id', header: 'ID' },
      { field: 'codigo', header: 'código' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'estado', header: 'Estado' }
    ];

    constructor(
        private cupsService: CupService
    ){}
    
    loadCups() {
        this.cupsService.getAllCups().subscribe(data => {
          this.cups = data;
          this.filteredCups = data;
          console.log(this.filteredCups)        },
        );
      }
    
      ngOnInit() {
        this.loadCups();
      }


    openDetail(id: any){ }
  
    exportCups(){}
  
    searchCups(id: any){}
}
