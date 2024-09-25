import { Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './layout/main-layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { CupsComponent } from './modules/cups/cups.component';
import { DetailResultsComponent } from './modules/detail-results/detail-results.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: '', component: LayoutComponent,
        children: [
          
          { path: 'home', component: HomeComponent },
          { path: 'cups', component: CupsComponent },
          { path: 'detailResult', component: DetailResultsComponent }


        //   { path: '', redirectTo: 'crud', pathMatch: 'full' },
          // { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a login si no hay ninguna ruta
        ]
      }
];
