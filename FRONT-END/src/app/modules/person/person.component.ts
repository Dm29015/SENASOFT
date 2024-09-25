import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-person',
  standalone: true,
  imports: [SHARED_IMPORTS,
    SharedModule,
    CRUDComponent,
    TableModule
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  
}
