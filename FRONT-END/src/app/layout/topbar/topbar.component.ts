import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../views/login/login.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) {}

  toggleSidebarVisibility() {
    this.toggleSidebar.emit();
  }

  logout() {
    // Eliminar el token de almacenamiento
    this.authService.logout();
    this.preventBack();
  }

  preventBack(): void {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
}