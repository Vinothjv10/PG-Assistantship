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
    SidebarComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
