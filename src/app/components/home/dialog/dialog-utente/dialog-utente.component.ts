import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {Utente} from "../../home.component";

@Component({
  selector: 'app-dialog-utente',
  templateUrl: './dialog-utente.component.html',
  styleUrls: ['./dialog-utente.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class DialogUtenteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Utente) {
  }
}
