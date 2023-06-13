import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import {DialogUtenteComponent} from './components/home/dialog/dialog-utente/dialog-utente.component';
import {DialogListaUtentiComponent} from './components/home/dialog/dialog-lista-utenti/dialog-lista-utenti.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CommonModule} from "@angular/common";

import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DialogEventComponent } from './components/calendar/dialog/dialog-event/dialog-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    DialogUtenteComponent,
    DialogListaUtentiComponent,

    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    DialogEventComponent,

  ],
  exports: [CalendarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
