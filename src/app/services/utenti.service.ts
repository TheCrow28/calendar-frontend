import {Injectable} from '@angular/core';
import {addHours, startOfDay} from "date-fns";

export interface Evento {
  start: Date;
  end: Date;
  title: string;
}

@Injectable({
  providedIn: 'root'
})

export class UtentiService {

  data1 = "2023-06-23 10:00"
  data2 = "2023-06-25 08:00"
  data3 = "2023-06-27 15:00"

  date1 = new Date(this.data1)
  date2 = new Date(this.data2)
  date3 = new Date(this.data3)

  listaUtenti = [
    {
      id: 0,
      name: "Ale" + " " + "Sandro",
      email: "ale@email.it",
      phone: "3455555555",
      url: "/rest/members/0",
      eventi: [
        {
          start: this.date1,
          end: this.date2,
          title: 'Elettricista',
        },
        {
          start: this.date2,
          title: 'Barbiere',
        },
      ]
    },
    {
      id: 1,
      name: "Mari" + " " + "Ella",
      email: "mari@email.it",
      phone: "3444444444",
      url: "/rest/members/1",
      eventi: [
        {
          start: this.date2,
          end: this.date3,
          title: 'Meeting',
        },
        {
          start: addHours(startOfDay(new Date()), 2),
          end: addHours(new Date(), 2),
          title: 'Ristrutturazione',
        },
      ]
    },
  ]

  getUtenti() {
    return this.listaUtenti
  }

}
