import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class SpringbootService {

  private url: string;
  
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/o365calendar-web/rest'
  }

  getUtenti(){
    return this.http.get(this.url + '/members')
  }

  getEventi(email: string){
    return this.http.get(this.url + '/calendarevents/' + email)
  }

  postUtente(body: {}){
    return this.http.post(this.url + '/members', body)

  }
}
