import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogUtenteComponent } from './home/dialog/dialog-utente/dialog-utente.component';
import { DialogListaUtentiComponent } from './home/dialog/dialog-lista-utenti/dialog-lista-utenti.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    DialogUtenteComponent,
    DialogListaUtentiComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
