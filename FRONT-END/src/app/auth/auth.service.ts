import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'authToken';
  private userKey: string = 'userData';

  constructor(private router: Router) {}

  // Guardar el token y los datos del usuario
  setSession(authResult: { token: string; user: any }): void {
    localStorage.setItem(this.tokenKey, authResult.token);
    localStorage.setItem(this.userKey, JSON.stringify(authResult.user));
  }

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

   // Obtener los datos del usuario
   getUserData(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  } 

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
  
    const tokenExpiration = this.getTokenExpirationDate(token);
    if (tokenExpiration && tokenExpiration <= new Date()) {
      this.logout(); // Token expirado, forzar logout
      return false;
    }
  
    return true;
  }
  
  getTokenExpirationDate(token: string): Date | null {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload.exp) {
      return null;
    }
  
    // Convertir el tiempo UNIX a fecha
    const date = new Date(0);
    date.setUTCSeconds(payload.exp);
    return date;
  }
  

  // Método para hacer logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
