import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';

import {PersonServiceService} from '../../modules/person/person-service.service'
import {personModel} from '../../modules/person/person.models'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SHARED_IMPORTS,
    SharedModule,
    CRUDComponent,
    TableModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private servicePerson: PersonServiceService
  ){}

  person: personModel[]=[]
  filtedPerson: personModel[]=[]

  loadPearson(){
    this.servicePerson.getAllPerson().subscribe(data => {
      this.person = data      
    },
    );
  }


  ngOnInit() {
      this.loadPearson()
  }
}
