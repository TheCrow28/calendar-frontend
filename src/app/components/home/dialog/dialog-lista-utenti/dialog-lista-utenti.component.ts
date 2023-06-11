import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {NgFor} from "@angular/common";
import {Utente} from "../../home.component";

@Component({
  selector: 'app-dialog-lista-utenti',
  templateUrl: './dialog-lista-utenti.component.html',
  styleUrls: ['./dialog-lista-utenti.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, NgFor],
})

export class DialogListaUtentiComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Utente[]) {
  }
}
