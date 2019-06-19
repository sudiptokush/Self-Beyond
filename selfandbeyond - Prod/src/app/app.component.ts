import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  updownDirector = './assets/img/icons/down-arrow.png';
  updownContact = './assets/img/icons/down-arrow.png';

  statusDirector = 'close';
  statusContact = 'close';

  constructor(private router: Router) {
    this.router.navigate(['showHome']);
  }

  // Widget open close
  toggleDetails(widget) {
    switch (widget) {
      // For Director Widget
      case 'Director':
        switch (this.statusDirector)
        {
          case 'open':
            this.updownDirector = './assets/img/icons/down-arrow.png';
            this.statusDirector = 'close';
            break;
          case 'close':
            this.updownDirector = './assets/img/icons/up-arrow.png';
            this.statusDirector = 'open';
            break;
        }
      break;

      // For Contact Widget
      case 'Contact':
        switch (this.statusContact) {
          case 'open':
            this.updownContact = './assets/img/icons/down-arrow.png';
            this.statusContact = 'close';
            break;
          case 'close':
            this.updownContact = './assets/img/icons/up-arrow.png';
            this.statusContact = 'open';
            break;
        }
      break;
    }
  }

  // Menu Click handling
  menuClicked(menu) {
    switch (menu) {
      case 'Home':
        this.router.navigate(['showHome']);
        break;
      case 'About':
        this.router.navigate(['showAbout']);
        break;
      case 'Events':
        this.router.navigate(['showEvents']);
        break;
      case 'Gallery':
        this.router.navigate(['showGallery']);
        break;
      case 'Contact':
        this.router.navigate(['showContact']);
        break;
      case 'Sessions':
        this.router.navigate(['showSessions']);
        break;
      case 'Training':
        this.router.navigate(['showTraining']);
        break;
      case 'Blogs':
        this.router.navigate(['blogs']);
        break;
    }
  }
}
