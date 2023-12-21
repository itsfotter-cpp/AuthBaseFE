import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { RegistrationComponent } from './registration/registration/registration.component';
import { InserimentoRichiestaComponent } from './inserimento-richiesta/inserimento-richiesta.component';
import { GestioneRichiesteComponent } from './gestione-richieste/gestione-richieste.component';
import { RichiestePersonaliComponent } from './richieste-personali/richieste-personali.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles:['admin']}},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard], data: {roles:['user']}},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'inserimento-richiesta', component: InserimentoRichiestaComponent, canActivate: [AuthGuard]},
  {path: 'gestione-richieste', component: GestioneRichiesteComponent, canActivate: [AuthGuard]},
  {path: 'richieste-personali', component: RichiestePersonaliComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
