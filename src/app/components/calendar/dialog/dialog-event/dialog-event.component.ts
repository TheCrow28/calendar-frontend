import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { Evento } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-dialog-event',
  templateUrl: './dialog-event.component.html',
  styleUrls: ['./dialog-event.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogEventComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Evento) {
  }
}
