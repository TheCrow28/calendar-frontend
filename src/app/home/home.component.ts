import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogUtenteComponent} from "./dialog/dialog-utente/dialog-utente.component";
import {DialogListaUtentiComponent} from "./dialog/dialog-lista-utenti/dialog-lista-utenti.component";

export interface Utente {
  name: string;
  email: string;
  phone: string;
  eventi: Array<Evento>;
}

export interface Evento {
  data: Date;
  descrizione: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  i = 1;
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  url = "/rest/members/"
  eventi: Array<Evento> | undefined;

  data1 = "2023-06-23 00:00"
  data2 = "2023-06-25 00:00"

  date1 = new Date(this.data1)
  date2 = new Date(this.data2)


  listaUtenti = [
    {
      id: 0,
      name: "Nome" + " " + "Cognome",
      email: "nomecognome@nomecognome2.onmicrosoft.com",
      phone: "2125551212",
      url: "/rest/members/0",
      eventi: [
        {
          data: this.date1,
          descrizione: "Parrucchiere"
        },
        {
          data: this.date2,
          descrizione: "Elettricista"
        },
      ]
    }
  ]

  inserisciUtente() {

    let presente: boolean = false;

    for (let i = 0; i < this.listaUtenti.length; i++) {

      if (this.listaUtenti[i].name == this.name) {
        presente = true;
        break;
      }
    }

    if (!presente) {
      let newId: number = this.i++;
      const utente = {
        id: newId,
        name: this.name,
        email: this.email,
        phone: this.phone,
        url: this.url + newId,
        eventi: this.eventi
      }
      // @ts-ignore
      this.listaUtenti.push(utente)
    } else {

      return alert("Utente già inserito");
    }
  }

  constructor(public dialog: MatDialog) {
  }

  openDialogSingolo(id: number) {
    this.dialog.open(DialogUtenteComponent, {
      data: {
        name: this.listaUtenti[id].name,
        email: this.listaUtenti[id].email,
        phone: this.listaUtenti[id].phone
      }
    });
  }

  openDialogTutti() {
    this.dialog.open(DialogListaUtentiComponent, {
      data: this.listaUtenti
    });
  }
}
