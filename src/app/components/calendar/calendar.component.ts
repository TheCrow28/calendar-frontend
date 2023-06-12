import {Component, OnInit} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {startOfDay, isSameDay, isSameMonth,} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent, CalendarView,} from 'angular-calendar';
import {ActivatedRoute} from "@angular/router";
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [],
  templateUrl: './calendar.component.html',

})

export class CalendarComponent implements OnInit{

  listaEventi: any;
  events = new Array

  constructor(private route: ActivatedRoute, private http: SpringbootService) {
  }

  ngOnInit(): void {
    this.http.getEventi(this.route.snapshot.paramMap.get('email')!)
    .subscribe(data => {
      this.listaEventi = data

       for (let i = 0; i < this.listaEventi.length; i++) {

         const newEvent = {
          start: new Date(this.listaEventi[i].start.dateTime),
          end: new Date(this.listaEventi[i].end.dateTime),
          title: this.listaEventi[i].subject,

         }

         this.events.push(newEvent)
       }
    })
  }

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  activeDayIsOpen: boolean = false;

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}

