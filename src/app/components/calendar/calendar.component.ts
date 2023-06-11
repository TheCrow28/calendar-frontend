import {Component} from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {startOfDay, isSameDay, isSameMonth,} from 'date-fns';
import {Subject} from 'rxjs';
import {CalendarEvent, CalendarView,} from 'angular-calendar';
import {UtentiService} from "../../services/utenti.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [],
  templateUrl: './calendar.component.html',

})

export class CalendarComponent {

  constructor(private utentiService: UtentiService, private route: ActivatedRoute) {
  }

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  events = this.utentiService.listaUtenti[parseInt(this.route.snapshot.paramMap.get('id')!)].eventi

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

