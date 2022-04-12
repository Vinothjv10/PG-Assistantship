import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './admin-login/adminpage/adminpage.component';
import { AdminUniversityViewpageComponent } from './admin-university/admin-university-viewpage/admin-university-viewpage.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { ActChennaiDetailsComponent } from './colleges/act-chennai/act-chennai-details/act-chennai-details.component';
import { ActChennaiViewformComponent } from './colleges/act-chennai/act-chennai-viewform/act-chennai-viewform.component';
import { ActChennaiComponent } from './colleges/act-chennai/act-chennai.component';
import { GceSalemDetailsComponent } from './colleges/gce-salem/gce-salem-details/gce-salem-details.component';
import { GceSalemViewformComponent } from './colleges/gce-salem/gce-salem-viewform/gce-salem-viewform.component';
import { GceSalemComponent } from './colleges/gce-salem/gce-salem.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ViewFormComponent } from './view-form/view-form.component';

const routes: Routes = [

  {
    path: "", component: LoginComponent,
  },
  // { path: '**', component: LoginComponent },
  { path: 'gce-salem', component: GceSalemComponent },
  { path: 'gce-viewform', component: GceSalemViewformComponent },
  {
    path: 'gce-salem-details',
    children: [
      { path: '', component: GceSalemDetailsComponent },
    ]
  },


  { path: 'act-chennai', component: ActChennaiComponent },
  {
    path: 'act-chennai-details', component: ActChennaiDetailsComponent,
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
  },
  {
    path: 'uni-login',
    children: [
      {
        path: '', component: AdminUniversityComponent
      },
      {
        path: 'uni-admin', component: AdminUniversityViewpageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
