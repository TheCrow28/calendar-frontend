import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogUtenteComponent } from "./dialog/dialog-utente/dialog-utente.component";
import { DialogListaUtentiComponent } from "./dialog/dialog-lista-utenti/dialog-lista-utenti.component";
import { SpringbootService } from 'src/app/services/springboot.service';

export interface Evento {
  start: Date;
  end: Date;
  title: string;
}

export interface Utente {
  name: string;
  email: string;
  phoneNumber: string;
  eventi: Array<Evento>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  i: number;
  name: string;
  email: string;
  phoneNumber: string;
  url = "/rest/members/"
  eventi: Array<Evento>;

  listaUtenti: any;

  constructor(public dialog: MatDialog, private http: SpringbootService) {
  }

  ngOnInit(): void {
    this.http.getUtenti()
      .subscribe(data => {
        this.listaUtenti = data
        console.log(this.listaUtenti)
      })
  }


  inserisciUtente() {

    let presente: boolean = false;

    for (let i = 0; i < this.listaUtenti.length; i++) {

      if (this.listaUtenti[i].name == this.name) {
        presente = true;
        break;
      }
    }

    if (!presente) {
      let newId: number = this.listaUtenti.length;
      const utente = {
        id: newId,
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        url: this.url + newId,
        eventi: new Array<Evento>
      }

      this.http.postUtente({
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber
      }).subscribe((data => {
        console.log(data)
      }))

      // this.listaUtenti.push(utente)

    } else {
      return alert("Utente già inserito");
    }
  }

  openDialogSingolo(email: string) {

    var searchTerm = email,
      index = -1;

    for (var i = 0, len = this.listaUtenti.length; i < len; i++) {
      if (this.listaUtenti[i].email === searchTerm) {
        index = i;
        break;
      }
    }

    this.dialog.open(DialogUtenteComponent, {
      data: {
        name: this.listaUtenti[index].name,
        email: this.listaUtenti[index].email,
        phoneNumber: this.listaUtenti[index].phoneNumber
      }
    });
  }

  openDialogTutti() {
    this.dialog.open(DialogListaUtentiComponent, {
      data: this.listaUtenti
    });
  }
}
