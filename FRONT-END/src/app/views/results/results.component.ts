// src/app/components/orden-list/orden-list.component.ts

import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { CRUDComponent } from '../../shared/crud/crud.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';

import { OrderService } from '../../modules/order/order.service';
import { AuthService } from '../../auth/auth.service';
import { Order } from '../../modules/order/order.models';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    SHARED_IMPORTS,
    SharedModule,
    CRUDComponent,
    TableModule
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class OrderComponent implements OnInit {
  order: Order[] = [];
  fieldOrder: Order[] = [];

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) { }

  loadOrders() {
    const userId = this.authService.getUserId();
    if (userId !== null) {
      this.orderService.getOrdersByUserId(userId).subscribe(data => {
        this.order = data;
      });
    }
  }

  ngOnInit() {
    this.loadOrders();
  }
}
