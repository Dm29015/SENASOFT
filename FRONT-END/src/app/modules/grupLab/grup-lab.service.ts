import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment';
import {grupLabModel} from '../grupLab/grupLab.model';

@Injectable({
  providedIn: 'root'
})
export class GrupLabService {

  private apiUrl = `${environment.apiUrl}/grupoLab`;

  constructor(private http: HttpClient) { }

  getAllResultsOrder(): Observable<grupLabModel[]> {
    return this.http.get<grupLabModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}
