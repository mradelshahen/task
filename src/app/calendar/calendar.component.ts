import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  persons : {};
  person;
  dpersons: {};
  calendarEvents: any[]=[] ;

  constructor( private apiService: ApiServiceService,private router: Router) { 
    this.person = this.apiService;
    
    }

  calendarPlugins = [dayGridPlugin];

  delete(personId){
    this.person.delete(personId);
  }

   eventClick(calendarEvents){
     if(calendarEvents.eventClick){
     this.router.navigate(['/']);
     }
   }

  ngOnInit() {
    this.apiService.getAll().valueChanges().subscribe(response =>
      this.persons = response
      // console.log(response)
      );
      this.apiService.getAll().valueChanges().subscribe(response =>
        this.calendarEvents = response
        // console.log(response)
        );
  }

}
