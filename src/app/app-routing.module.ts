import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "calendar/:id", component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
