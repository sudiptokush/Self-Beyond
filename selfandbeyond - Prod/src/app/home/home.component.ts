import { Component, OnInit } from '@angular/core';
import {EmailHelperService, IMessage} from '../email-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  body: IMessage = {};

  constructor(private emailHelper: EmailHelperService) { }

  ngOnInit() {
  }

  sendEmail(body: IMessage) {
    this.emailHelper.sendEmail(body).subscribe(res => {
      console.log('Mail Sent', res);
      alert('Thank you for registering with us');
    }, error => {
      console.log('Failed', error);
    });
    body.name = '';
    body.mobile = '';
    body.email = '';
    body.message = '';
  }

}

