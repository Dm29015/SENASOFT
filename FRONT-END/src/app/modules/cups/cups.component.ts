import { Component, OnInit } from '@angular/core';
import { CRUDComponent } from '../../shared/crud/crud.component';

import { Cups } from './cups.model';
import { CupService } from './cups.service';

@Component({
  selector: 'app-cups',
  standalone: true,
  imports: [
    CRUDComponent
  ],
  templateUrl: './cups.component.html'
})

export class CupsComponent implements OnInit{

    cups: Cups[] = [];
    filteredCups: Cups[] = [];
    historyItems: any[] = [];
  
    columns: { field: string, header: string }[] = [
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
          console.log(this.filteredCups)
        },
        );
      }
    
      ngOnInit() {
        this.loadCups();
      }


    openDetail(id: any){ }
  
    exportCups(){}
  
    searchCups(id: any){}
}
