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

  getAllResultsOrder(): Observable<testResultModel[]> {
    return this.http.get<testResultModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}
