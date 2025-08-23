import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface IMessage {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

@Injectable()
export class EmailHelperService {

  private emailUrl = '/email/emailHelper.php';

  constructor(private http: HttpClient) {}

  sendEmail(message: IMessage): Observable<IMessage> {
    return this.http.post<IMessage>(this.emailUrl, message).pipe(
      map((response: IMessage) => {
        // console.log('Mail Sent', response);
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        // console.log('Failed', error);
        return throwError(() => error);
      })
    );
  }
}
