import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogUtenteComponent} from "./dialog/dialog-utente/dialog-utente.component";
import {DialogListaUtentiComponent} from "./dialog/dialog-lista-utenti/dialog-lista-utenti.component";
import {Evento, UtentiService} from "../../services/utenti.service";

export interface Utente {
  name: string;
  email: string;
  phone: string;
  eventi: Array<Evento>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  i = 2;
  name!: string;
  email!: string;
  phone!: string;
  url = "/rest/members/"
  eventi!: Array<Evento>;

  constructor(public dialog: MatDialog, private utentiService: UtentiService) {
  }

  listaUtenti = this.utentiService.getUtenti()

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
        eventi: new Array<Evento>
      }

      this.listaUtenti.push(utente)

    } else {
      return alert("Utente già inserito");
    }
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
