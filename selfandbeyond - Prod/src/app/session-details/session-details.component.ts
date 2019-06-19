import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

  sessionDetails;
  backButtonDisplay;

  @Output() backToMaster: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  onBack() {
    this.backToMaster.emit('show');
    this.backButtonDisplay = 'hide';
    this.sessionDetails = '';
  }

  childCalled(childName) {
    this.backButtonDisplay = 'show';
    this.sessionDetails = childName;
    // this.backToMaster.emit("hide");
  }
}
