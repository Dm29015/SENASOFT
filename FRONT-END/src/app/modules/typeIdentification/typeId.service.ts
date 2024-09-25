import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import { TypeIdentification } from './typeId.model';

@Injectable({
  providedIn: 'root'
})
export class TypeIdentificationService {
  private apiUrl = `${environment.apiUrl}/tipoIdent`;

  constructor(private http: HttpClient) { }

  getAllTypeId(): Observable<TypeIdentification[]> {
    return this.http.get<TypeIdentification[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}