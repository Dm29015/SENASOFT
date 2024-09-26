import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import {testModel} from '../test/test.models';

@Injectable({
  providedIn: 'root'
})
export class TestServicecService {

  private apiUrl = `${environment.apiUrl}/pruebas`;

  constructor(private http: HttpClient) { }

  getAllResultsTest(): Observable<testModel[]> {
    return this.http.get<testModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getOrdersByOrder(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/procedimiento/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }}
