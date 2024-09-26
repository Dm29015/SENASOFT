import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import {procedimentModel} from '../procediment/procediment.models';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentService {
  
  private apiUrl = `${environment.apiUrl}/procedimiento`;

  constructor(private http: HttpClient) { }

  getAllResultsOrder(): Observable<procedimentModel[]> {
    return this.http.get<procedimentModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}
