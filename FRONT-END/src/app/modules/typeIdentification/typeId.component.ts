import { Component, OnInit } from '@angular/core';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { TypeIdentification } from './typeId.model';
import { TypeIdentificationService } from './typeId.service';


@Component({
  selector: 'app-typeId',
  standalone: true,
  imports: [
    CRUDComponent
  ],
  templateUrl: './typeId.component.html'
})

export class TypeIdentificationComponent implements OnInit{

    typeId: TypeIdentification[] = [];
    filteredTypeId: TypeIdentification[] = [];

    constructor(
        private typeIdService: TypeIdentificationService
    ){}
    
      loadTypeId() {
        this.typeIdService.getAllTypeId().subscribe(data => {
          this.typeId = data;
          this.filteredTypeId = data;
        },
        );
      }

      ngOnInit() {
        this.loadTypeId();
      }


    openDetail(id: any){ }
  
    exportCups(){}
  
    searchCups(id: any){}
}
