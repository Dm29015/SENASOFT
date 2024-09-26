import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import { Order } from './order.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/orden`;
  private apiUrl2 = `${environment.apiUrl}/historia`;


  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getOrdersByUser(id: number): Observable<any[]> {
    // const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<any[]>(`${this.apiUrl2}/user/${id}`);
  }

  createOrder(Order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, Order).pipe(
      catchError(this.handleError)
    );
  } 

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}
