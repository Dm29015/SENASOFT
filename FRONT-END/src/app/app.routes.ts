import { Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { LayoutComponent } from './layout/main-layout/layout.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: '', component: LayoutComponent,
        children: [
          
          { path: 'home', component: HomeComponent }
        //   { path: '', redirectTo: 'crud', pathMatch: 'full' },
          // { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a login si no hay ninguna ruta
        ]
      }
];
