import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  updownUpcomingEvents = './assets/img/icons/down-arrow.png';
  statusUpcomingEvents = 'close';

  updownRegularSessions = './assets/img/icons/down-arrow.png';
  statusRegularSessions = 'close';

  updownPastEvents = './assets/img/icons/down-arrow.png';
  statusPastEvents = 'close';

  updownPastEventsList = './assets/img/icons/down-arrow.png';
  statusPastEventsList = 'close';

  constructor() { }

  ngOnInit() {
  }

  toggleDetails(content) {
    switch (content) {
      // For Upcoming Events
      case 'UpcomingEvents':
        switch(this.statusUpcomingEvents)
        {
          case 'open':
            this.updownUpcomingEvents = './assets/img/icons/down-arrow.png';
            this.statusUpcomingEvents = 'close';
            break;
          case 'close':
            this.updownUpcomingEvents = './assets/img/icons/up-arrow.png';
            this.statusUpcomingEvents = 'open';
            break;
        }
      break;

      // For Regular Sessions
      case 'RegularSessions':
        switch (this.statusRegularSessions) {
          case 'open':
            this.updownRegularSessions = './assets/img/icons/down-arrow.png';
            this.statusRegularSessions = 'close';
            break;
          case 'close':
            this.updownRegularSessions = './assets/img/icons/up-arrow.png';
            this.statusRegularSessions = 'open';
            break; 
        }
      break;

      // For Past Events
      case 'PastEvents':
        switch (this.statusPastEvents) {
          case 'open':
            this.updownPastEvents = './assets/img/icons/down-arrow.png';
            this.statusPastEvents = 'close';
            break;
          case 'close':
            this.updownPastEvents = './assets/img/icons/up-arrow.png';
            this.statusPastEvents = 'open';
            break;
        }
      break;

      // For Past Event List 
      case 'PastEventsList':
        switch (this.statusPastEventsList)
        {
          case 'open':
            this.updownPastEventsList = './assets/img/icons/down-arrow.png';
            this.statusPastEventsList = 'close';
            break;
          case 'close':
            this.updownPastEventsList = './assets/img/icons/up-arrow.png';
            this.statusPastEventsList = 'open';
            break; 
        }
      break;
    }
  }

}
