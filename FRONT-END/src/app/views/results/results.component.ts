import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

import { OrderService } from '../../modules/order/order.service';
import { AuthService } from '../../auth/auth.service';
import { Order } from '../../modules/order/order.models';
import { TypeDocumentService } from '../../modules/typeDocument/typeDocument.service';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    SHARED_IMPORTS,
    SharedModule,
    CRUDComponent,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    RouterModule
  ],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class OrderComponent implements OnInit {
  searchQuery = '';
  loading: boolean = true;
  orders: Order[] = [];
  selectedOrder!: Order[];
  documents: any[] = [];

  startDate: Date | null = null;
  endDate: Date | null = null; 

  filteredOrders: any[] = [];

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private documentService: TypeDocumentService
  ) { }

  loadOrders() {
    const userId = this.authService.getUserId();
    if (userId !== null) {
      forkJoin({
        orders: this.orderService.getOrdersByUser(userId),
        documents: this.documentService.getAllTypeDocument()
      }).subscribe(({ orders, documents }) => {
        this.documents = documents;

        // Map the orders to include the document names instead of IDs
        this.orders = orders.map(order => {
          const document = this.documents.find(doc => doc.id === order.id_documento);
          return {
            ...order,
            nombre_documento: document ? document.nombre_documento : 'Desconocido'
          };
        });

        this.loading = false;
      }, error => {
        console.error("Error fetching data: ", error);
        this.loading = false;
      });
    } else {
      console.warn("User ID is null");
    }
  }

  ngOnInit() {
    this.loadOrders();
  }

  clear(dt: any) {
    dt.clear();
    this.searchQuery = '';
  }

  onSearch() {
    const lowerQuery = this.searchQuery.toLowerCase().trim();
    
    this.filteredOrders = this.orders.filter(order => {
      const documentName = order as Order & { nombre_documento?: string };
      const document = (documentName.nombre_documento || '').toLowerCase().includes(lowerQuery);
      
      const ordenName = order.orden.toString().includes(this.searchQuery);
      const fecha = order.fecha.toString().includes(this.searchQuery);


      return document || ordenName || fecha;
    });

  if (this.searchQuery === '') {
    this.filteredOrders = this.orders;
  }
}

  
}
