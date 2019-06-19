import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

   @Input() sessionName;
   @Input() sessionTitle;

  constructor() { }

  ngOnInit() {
  }

}
