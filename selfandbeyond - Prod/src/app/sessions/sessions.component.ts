import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import {SessionDetailsComponent} from '../session-details/session-details.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  @ViewChild(SessionDetailsComponent) sessionDetails: SessionDetailsComponent;
  sessionMaster = 'show';
  backButtonDisplay;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  selectedSession(session) {
    this.sessionMaster = 'hide';
    this.sessionDetails.childCalled(session);
  }

  onBack($event) {
    this.sessionMaster = $event;
  }
}
