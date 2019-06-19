import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  trainingDetails;
  backButtonDisplay;

  @Output() backToMaster: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBack() {
    this.backToMaster.emit('show');
    this.backButtonDisplay = 'hide';
    this.trainingDetails = '';
  }

  childCalled(childName) {
    this.backButtonDisplay = 'show';
    this.trainingDetails = childName;
  }

}
