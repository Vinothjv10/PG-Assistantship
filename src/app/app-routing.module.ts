import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './admin-login/adminpage/adminpage.component';
import { AdminUniversityViewpageComponent } from './admin-university/admin-university-viewpage/admin-university-viewpage.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { ActChennaiDetailsComponent } from './colleges/act-chennai/act-chennai-details/act-chennai-details.component';
import { ActChennaiViewformComponent } from './colleges/act-chennai/act-chennai-viewform/act-chennai-viewform.component';
import { ActChennaiComponent } from './colleges/act-chennai/act-chennai.component';
import { AlagapaDetailsComponent } from './colleges/alagapa/alagapa-details/alagapa-details.component';
import { AlagapaViewformComponent } from './colleges/alagapa/alagapa-viewform/alagapa-viewform.component';
import { AlagapaComponent } from './colleges/alagapa/alagapa.component';
import { AnnaUniversityCoimbatoreDetailsComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-details/anna-university-coimbatore-details.component';
import { AnnaUniversityCoimbatoreViewformComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-viewform/anna-university-coimbatore-viewform.component';
import { AnnaUniversityCoimbatoreComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore.component';
import { AnnaUniversityMaduraiDetailsComponent } from './colleges/anna-university-madurai/anna-university-madurai-details/anna-university-madurai-details.component';
import { AnnaUniversityMaduraiViewformComponent } from './colleges/anna-university-madurai/anna-university-madurai-viewform/anna-university-madurai-viewform.component';
import { AnnaUniversityMaduraiComponent } from './colleges/anna-university-madurai/anna-university-madurai.component';
import { AnnaUniversityTirunelveliDetailsComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-details/anna-university-tirunelveli-details.component';
import { AnnaUniversityTirunelveliViewformComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-viewform/anna-university-tirunelveli-viewform.component';
import { AnnaUniversityTirunelveliComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli.component';
import { CegGuindyDetailsComponent } from './colleges/ceg-guindy/ceg-guindy-details/ceg-guindy-details.component';
import { CegGuindyViewformComponent } from './colleges/ceg-guindy/ceg-guindy-viewform/ceg-guindy-viewform.component';
import { CegGuindyComponent } from './colleges/ceg-guindy/ceg-guindy.component';
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
  },


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
    path: 'act-chennai-details',
    children: [
      { path: '', component: ActChennaiDetailsComponent },
      { path: 'act-chennai-form', component: ActChennaiViewformComponent }
    ]
  },

  { path: 'alagapa', component: AlagapaComponent },
  {
    path: 'alagapa-details',
    children: [
      { path: '', component: AlagapaDetailsComponent },
      { path: 'alagapa-viewform', component: AlagapaViewformComponent }
    ]
  },

  { path: 'uni-coimbatore', component: AnnaUniversityCoimbatoreComponent },
  {
    path: 'uni-coimbatore-details',
    children: [
      { path: '', component: AnnaUniversityCoimbatoreDetailsComponent },
      { path: 'uni-coimbatore-viewform', component: AnnaUniversityCoimbatoreViewformComponent }
    ]
  },

  { path: 'uni-madurai', component: AnnaUniversityMaduraiComponent },
  {
    path: 'uni-madurai-details',
    children: [
      { path: '', component: AnnaUniversityMaduraiDetailsComponent },
      { path: 'uni-madurai-viewform', component: AnnaUniversityMaduraiViewformComponent }
    ]
  },

  { path: 'uni-tirunelveli', component: AnnaUniversityTirunelveliComponent },
  {
    path: 'uni-tirunelveli-details',
    children: [
      { path: '', component: AnnaUniversityTirunelveliDetailsComponent },
      { path: 'uni-tirunelveli-viewform', component: AnnaUniversityTirunelveliViewformComponent }
    ]
  },

  { path: 'ceg-guindy', component: CegGuindyComponent },
  {
    path: 'ceg-guindy-details',
    children: [
      { path: '', component: CegGuindyDetailsComponent },
      { path: 'ceg-guindy-viewform', component: CegGuindyViewformComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
