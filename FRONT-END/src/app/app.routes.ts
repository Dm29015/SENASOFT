import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './layout/main-layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { CupsComponent } from './modules/cups/cups.component';

import { AuthGuard } from './auth/guard';
import { DetailResultsComponent } from './modules/detail-results/detail-results.component';
import { OrderComponent } from './views/results/results.component';
import { ChatService } from './views/chat/chat.service';
import { ChatComponent } from './views/chat/chat.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },

      { path: 'cups', component: CupsComponent, canActivate: [AuthGuard]},
      { path: 'detailResult', component: DetailResultsComponent, canActivate: [AuthGuard] },
      { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },

      
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];