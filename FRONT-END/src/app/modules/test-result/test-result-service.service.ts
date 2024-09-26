import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import {testResultModel} from '../test-result/testResult.models';

@Injectable({
  providedIn: 'root'
})
export class TestResultServiceService {

  private apiUrl = `${environment.apiUrl}/ResultOrden`;

  constructor(private http: HttpClient) { }

  getAllResultsOrderResult(): Observable<testResultModel[]> {
    return this.http.get<testResultModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  getOrdersByOrder(id: number): Observable<any[]> {
    // const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<any[]>(`${this.apiUrl}/orden/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}
