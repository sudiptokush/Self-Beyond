import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

@Injectable()
export class EmailHelperService {

  private emailUrl = '/email/emailHelper.php';
  constructor(private http: Http) { }

  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        // console.log('Mail Sent', response);
        return response;
      })
      .catch(error => {
        // console.log('Failed', error);
        return Observable.throw(error);
      })
  }
}
