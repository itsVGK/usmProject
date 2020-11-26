import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalComponent } from './internal/internal.component';
import { LoginComponent } from '../user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../user/registration/registration.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [InternalComponent, ReportComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InternalModule { }
