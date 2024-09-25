import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../enviroment/enviroment'; 
import { Cups } from './cups.model';

@Injectable({
  providedIn: 'root'
})
export class CupService {
  private apiUrl = `${environment.apiUrl}/cups`;

  constructor(private http: HttpClient) { }

  getAllCups(): Observable<Cups[]> {
    return this.http.get<Cups[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  createCup(cup: Cups): Observable<Cups> {
    return this.http.post<Cups>(this.apiUrl, cup).pipe(
      catchError(this.handleError)
    );
  } 

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Algo salió mal; por favor, intente nuevamente más tarde.');
  }
}