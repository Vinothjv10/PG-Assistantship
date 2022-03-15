import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { CollegeNameComponent } from './college-name/college-name.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { GctClgComponent } from './gct-clg/gct-clg.component';
import { PsgClgComponent } from './psg-clg/psg-clg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsFormComponent,
    CollegeNameComponent,
    ViewFormComponent,
    GctClgComponent,
    PsgClgComponent,

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
