import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import {GalleryDetailsComponent} from '../gallery-details/gallery-details.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  sessionName = '';
  sessionTitle = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadContent(sessionName) {
    this.sessionName = sessionName;
    switch (sessionName) {
      case 'Dessert':
      this.sessionTitle = 'Dessert';
      break;
      case 'AsianMartialDance':
      this.sessionTitle = 'Asian Martial Dance';
      break;
      case 'CombatArt':
      this.sessionTitle = 'Combat Art';
      break;
      case 'ConstellationTraining':
      this.sessionTitle = 'Constellation Training';
      break;
      case 'HealYourLife':
      this.sessionTitle = 'Heal Your Life, Love Yourself';
      break;
      case 'IntegratedHealing':
      this.sessionTitle = 'Integrated Healing';
      break;
      case 'PlayTherapy':
      this.sessionTitle = 'Play Therapy';
      break;
      case 'SuryaNamaskar':
      this.sessionTitle = 'Surya Namaskar';
      break;
    }
  }
}
