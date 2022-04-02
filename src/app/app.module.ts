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


import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';


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

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatButtonModule, MatRadioModule, MatFormFieldModule, MatNativeDateModule,

    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
