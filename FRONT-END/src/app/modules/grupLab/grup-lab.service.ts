import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class GrupLabService {

  private apiUrl = `${environment.apiUrl}/grupoLab/orden`;

  constructor(private http: HttpClient) { }

  getAllResultsByOrder(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}
