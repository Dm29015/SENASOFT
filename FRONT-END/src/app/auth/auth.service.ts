import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'authToken';
  private userKey: string = 'userData';

  constructor(private router: Router) {}

  setSession(authResult: { token: string; user: any }): void {
    localStorage.setItem(this.tokenKey, authResult.token);
    localStorage.setItem(this.userKey, JSON.stringify(authResult.user));
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

   getUserData(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  } 

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
  
    const tokenExpiration = this.getTokenExpirationDate(token);
    if (tokenExpiration && tokenExpiration <= new Date()) {
      this.logout();
      return false;
    }
  
    return true;
  }
  
  getTokenExpirationDate(token: string): Date | null {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload.exp) {
      return null;
    }
  
    const date = new Date(0);
    date.setUTCSeconds(payload.exp);
    return date;
  }
  
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
    
  }
}
