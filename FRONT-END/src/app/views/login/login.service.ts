import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../enviroment/enviroment'; 
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  login(loginData: any) {
    return this.http.post(`${this.apiUrl}/login`, loginData).subscribe({
      next: (response: any) => {
        // localStorage.setItem('token', response.token);
        // this.router.navigate(['/home']);

        if (response.success) {
        this.toastr.success('Inicio de sesión exitoso');
          this.authService.setSession(response);
          this.router.navigate(['/home']);
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toastr.error('Información incorrecta.');
        } else if (error.status === 404) {
          this.toastr.error('Usuario no encontrado');
        } else if (error.status === 0) {
          this.toastr.error('No se pudo conectar con el servidor. Verifica tu conexión o que el servidor esté en funcionamiento.');
        } else {
          this.toastr.error('Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.');
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
