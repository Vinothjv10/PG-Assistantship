import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './admin-login/adminpage/adminpage.component';
import { ActChennaiDetailsComponent } from './colleges/act-chennai/act-chennai-details/act-chennai-details.component';
import { ActChennaiViewformComponent } from './colleges/act-chennai/act-chennai-viewform/act-chennai-viewform.component';
import { ActChennaiComponent } from './colleges/act-chennai/act-chennai.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ViewFormComponent } from './view-form/view-form.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent,
  },
  {
    path: 'act-chennai', component: ActChennaiDetailsComponent,
    children: [
      {
        path: 'act-chennai-form', component: ActChennaiViewformComponent
      }
    ]
  },
  {
    path: 'admin-login',
    children: [
      { path: '', component: AdminLoginComponent, },
      { path: 'admin', component: AdminpageComponent, }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
