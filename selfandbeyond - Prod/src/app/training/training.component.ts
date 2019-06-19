import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import {TrainingDetailsComponent} from '../training-details/training-details.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  @ViewChild(TrainingDetailsComponent) trainingDetails: TrainingDetailsComponent;
  trainingMaster = 'show';
  backButtonDisplay;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectedTraining(session) {
    this.trainingMaster = 'hide';
    this.trainingDetails.childCalled(session);
  }

  onBack($event) {
    this.trainingMaster = $event;
  }

}
