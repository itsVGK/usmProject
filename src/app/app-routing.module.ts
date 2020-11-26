import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './internal/internal/internal.component';
import { ReportComponent } from './internal/report/report.component';
import { AuthGuard } from './Service/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';


const routes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegistrationComponent },
  { path: 'internal', component: InternalComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
