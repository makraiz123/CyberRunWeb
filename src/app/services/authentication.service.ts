import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  registerUser(user: User) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': 'blah'
    });

    const options = new RequestOptions({
      headers: headers,
      body: JSON.stringify(user)
    });

    this.http.post('http://localhost:1337/Users', JSON.stringify(user), options)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }
}
