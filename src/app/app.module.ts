import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { AlagapaComponent } from './colleges/alagapa/alagapa.component';
import { GceTirunelveliComponent } from './colleges/gce-tirunelveli/gce-tirunelveli.component';
import { GceBargurComponent } from './colleges/gce-bargur/gce-bargur.component';
import { GceErodeComponent } from './colleges/gce-erode/gce-erode.component';
import { CegGuindyComponent } from './colleges/ceg-guindy/ceg-guindy.component';
import { ActChennaiComponent } from './colleges/act-chennai/act-chennai.component';
import { MitChennaiComponent } from './colleges/mit-chennai/mit-chennai.component';
import { AnnaUniversityCoimbatoreComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore.component';
import { AnnaUniversityTirunelveliComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli.component';
import { AnnaUniversityMaduraiComponent } from './colleges/anna-university-madurai/anna-university-madurai.component';
import { UniversityAriyalurComponent } from './colleges/university-ariyalur/university-ariyalur.component';
import { UniversityPanrutiComponent } from './colleges/university-panruti/university-panruti.component';
import { UniversityDindigulComponent } from './colleges/university-dindigul/university-dindigul.component';
import { UniversityKanchepuramComponent } from './colleges/university-kanchepuram/university-kanchepuram.component';
import { UniversityNagercoilComponent } from './colleges/university-nagercoil/university-nagercoil.component';
import { UniversityThirukkuvalaiComponent } from './colleges/university-thirukkuvalai/university-thirukkuvalai.component';
import { UniversityRamanathapuramComponent } from './colleges/university-ramanathapuram/university-ramanathapuram.component';
import { UniversityPattukodaiComponent } from './colleges/university-pattukodai/university-pattukodai.component';
import { UniversityThiruvannamalaiComponent } from './colleges/university-thiruvannamalai/university-thiruvannamalai.component';
import { UniversityThoothukudiComponent } from './colleges/university-thoothukudi/university-thoothukudi.component';
import { UniversityThiruchirappalliComponent } from './colleges/university-thiruchirappalli/university-thiruchirappalli.component';
import { UniversityVillupuramComponent } from './colleges/university-villupuram/university-villupuram.component';
import { UniversityThindivanamComponent } from './colleges/university-thindivanam/university-thindivanam.component';
import { CitCoimbatoreComponent } from './colleges/cit-coimbatore/cit-coimbatore.component';
import { PsgCoimbatoreComponent } from './colleges/psg-coimbatore/psg-coimbatore.component';
import { ThiagarajarMaduraiComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai.component';
import { GctCoimbatoreComponent } from './colleges/gct-coimbatore/gct-coimbatore.component';
import { GceSalemComponent } from './colleges/gce-salem/gce-salem.component';
import { PeriyarVellorComponent } from './colleges/periyar-vellor/periyar-vellor.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GceSalemDetailsComponent } from './colleges/gce-salem/gce-salem-details/gce-salem-details.component';
import { GceSalemViewformComponent } from './colleges/gce-salem/gce-salem-viewform/gce-salem-viewform.component';
import { ActChennaiDetailsComponent } from './colleges/act-chennai/act-chennai-details/act-chennai-details.component';
import { ActChennaiViewformComponent } from './colleges/act-chennai/act-chennai-viewform/act-chennai-viewform.component';
import { AlagapaDetailsComponent } from './colleges/alagapa/alagapa-details/alagapa-details.component';
import { AlagapaViewformComponent } from './colleges/alagapa/alagapa-viewform/alagapa-viewform.component';
import { AnnaUniversityCoimbatoreDetailsComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-details/anna-university-coimbatore-details.component';
import { AnnaUniversityCoimbatoreViewformComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-viewform/anna-university-coimbatore-viewform.component';
import { AnnaUniversityTirunelveliDetailsComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-details/anna-university-tirunelveli-details.component';
import { AnnaUniversityTirunelveliViewformComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-viewform/anna-university-tirunelveli-viewform.component';
import { CegGuindyDetailsComponent } from './colleges/ceg-guindy/ceg-guindy-details/ceg-guindy-details.component';
import { CegGuindyViewformComponent } from './colleges/ceg-guindy/ceg-guindy-viewform/ceg-guindy-viewform.component';
import { CitCoimbatoreDetailsComponent } from './colleges/cit-coimbatore/cit-coimbatore-details/cit-coimbatore-details.component';
import { CitCoimbatoreViewformComponent } from './colleges/cit-coimbatore/cit-coimbatore-viewform/cit-coimbatore-viewform.component';
import { GceBargurDetailsComponent } from './colleges/gce-bargur/gce-bargur-details/gce-bargur-details.component';
import { GceBargurViewformComponent } from './colleges/gce-bargur/gce-bargur-viewform/gce-bargur-viewform.component';
import { GceErodeDetailsComponent } from './colleges/gce-erode/gce-erode-details/gce-erode-details.component';
import { GceErodeViewformComponent } from './colleges/gce-erode/gce-erode-viewform/gce-erode-viewform.component';
import { GceTirunelveliDetailsComponent } from './colleges/gce-tirunelveli/gce-tirunelveli-details/gce-tirunelveli-details.component';
import { GceTirunelveliViewformComponent } from './colleges/gce-tirunelveli/gce-tirunelveli-viewform/gce-tirunelveli-viewform.component';
import { GctCoimbatoreDetailsComponent } from './colleges/gct-coimbatore/gct-coimbatore-details/gct-coimbatore-details.component';
import { GctCoimbatoreViewformComponent } from './colleges/gct-coimbatore/gct-coimbatore-viewform/gct-coimbatore-viewform.component';
import { AnnaUniversityMaduraiDetailsComponent } from './colleges/anna-university-madurai/anna-university-madurai-details/anna-university-madurai-details.component';
import { AnnaUniversityMaduraiViewformComponent } from './colleges/anna-university-madurai/anna-university-madurai-viewform/anna-university-madurai-viewform.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './admin-login/adminpage/adminpage.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { AdminUniversityViewpageComponent } from './admin-university/admin-university-viewpage/admin-university-viewpage.component';
import { FilterPipe } from './admin-login/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsFormComponent,
    ViewFormComponent,
    AlagapaComponent,
    GceTirunelveliComponent,
    GceBargurComponent,
    GceErodeComponent,
    CegGuindyComponent,
    ActChennaiComponent,
    MitChennaiComponent,
    AnnaUniversityCoimbatoreComponent,
    AnnaUniversityTirunelveliComponent,
    AnnaUniversityMaduraiComponent,
    UniversityAriyalurComponent,
    UniversityPanrutiComponent,
    UniversityDindigulComponent,
    UniversityKanchepuramComponent,
    UniversityNagercoilComponent,
    UniversityThirukkuvalaiComponent,
    UniversityRamanathapuramComponent,
    UniversityPattukodaiComponent,
    UniversityThiruvannamalaiComponent,
    UniversityThoothukudiComponent,
    UniversityThiruchirappalliComponent,
    UniversityVillupuramComponent,
    UniversityThindivanamComponent,
    CitCoimbatoreComponent,
    PsgCoimbatoreComponent,
    ThiagarajarMaduraiComponent,
    GctCoimbatoreComponent,
    GceSalemComponent,
    PeriyarVellorComponent,
    ForgotPasswordComponent,
    SidebarComponent,
    NavbarComponent,
    GceSalemDetailsComponent,
    GceSalemViewformComponent,
    ActChennaiDetailsComponent,
    ActChennaiViewformComponent,
    AlagapaDetailsComponent,
    AlagapaViewformComponent,
    AnnaUniversityCoimbatoreDetailsComponent,
    AnnaUniversityCoimbatoreViewformComponent,
    AnnaUniversityTirunelveliDetailsComponent,
    AnnaUniversityTirunelveliViewformComponent,
    CegGuindyDetailsComponent,
    CegGuindyViewformComponent,
    CitCoimbatoreDetailsComponent,
    CitCoimbatoreViewformComponent,
    GceBargurDetailsComponent,
    GceBargurViewformComponent,
    GceErodeDetailsComponent,
    GceErodeViewformComponent,
    GceTirunelveliDetailsComponent,
    GceTirunelveliViewformComponent,
    GctCoimbatoreDetailsComponent,
    GctCoimbatoreViewformComponent,
    AnnaUniversityMaduraiDetailsComponent,
    AnnaUniversityMaduraiViewformComponent,
    AdminLoginComponent,
    AdminpageComponent,
    AdminUniversityComponent,
    AdminUniversityViewpageComponent,
    FilterPipe,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
