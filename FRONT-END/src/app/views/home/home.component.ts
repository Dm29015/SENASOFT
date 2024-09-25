import { Component } from '@angular/core';
import { CRUDComponent } from '../../shared/crud/crud.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CRUDComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // clients: any[] = [];
  // filteredClients: any[] = [];
  // historyItems: any[] = [];

  // columns: { field: string, header: string }[] = [
  //   { field: 'cedulaCliente', header: 'Cédula' },
  //   { field: 'nombreCliente', header: 'Nombre' },
  //   { field: 'apellidoCliente', header: 'Apellido' },
  //   { field: 'telefonoCliente', header: 'Teléfono' }
  // ];

  openDetail(id: any){

  }

  exportClients(){}

  searchClients(id: any){}
}
