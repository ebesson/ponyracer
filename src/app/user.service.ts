import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserService {

  constructor(private http: Http) {}

  register(login: string, password: string, birthYear: number) {
    const baseUrl = 'http://ponyracer.ninja-squad.com/api/users';
    const user = {login, password, birthYear};
    return this.http.post(baseUrl, user)
      .map(res => res.json());
  }
}
