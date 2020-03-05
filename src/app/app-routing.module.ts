import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { PrincipalComponent } from './pages/dashboard/principal/principal.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'events', component: ListEventsComponent },
  { path: 'dashboard', component: PrincipalComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
