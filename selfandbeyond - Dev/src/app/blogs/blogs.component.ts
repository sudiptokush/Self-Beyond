import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {blogs} from '../app.config';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogsComponent implements OnInit {

  visibility = true;
  content: any;
  constructor() { }

  ngOnInit() {
  }

  loadBlog(selected) {
    this.visibility = false;
    this.content = blogs[selected].content;
  }

  onBack() {
    this.visibility = true;
  }
}
