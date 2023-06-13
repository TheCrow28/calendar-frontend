import { Component, OnInit } from '@angular/core';
import { startOfDay, isSameDay, isSameMonth, } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventAction, CalendarView, } from 'angular-calendar';
import { ActivatedRoute } from "@angular/router";
import { SpringbootService } from 'src/app/services/springboot.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEventComponent } from './dialog/dialog-event/dialog-event.component';

@Component({
  selector: 'app-calendar',
  styleUrls: [],
  templateUrl: './calendar.component.html',

})

export class CalendarComponent implements OnInit {

  incompleteEvents: any;
  events: CalendarEvent[] = new Array

  constructor(private route: ActivatedRoute, private http: SpringbootService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.http.getEventi(this.route.snapshot.paramMap.get('email')!)
      .subscribe(data => {
        this.incompleteEvents = data

        for (let i = 0; i < this.incompleteEvents.length; i++) {

          const newEvent = {
            start: new Date(this.incompleteEvents[i].start.dateTime),
            end: new Date(this.incompleteEvents[i].end.dateTime),
            title: this.incompleteEvents[i].subject,
          }

          this.events.push(newEvent)
        }

        console.log(this.events)

      })
  }

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  activeDayIsOpen: boolean = false;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
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

  dialogEvent(event: CalendarEvent) {

    this.dialog.open(DialogEventComponent, {
      data: {
        start: event.start,
        end: event.end,
        title: event.title
      }
    });
  }

}

