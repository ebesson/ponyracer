import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RaceModel } from './models/race.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  list(): Observable<Array<RaceModel>> {
    const baseUrl = 'http://ponyracer.ninja-squad.com/api/races';
    return this.http.get(baseUrl, { params: { status: 'PENDING' } })
      .map(res => res.json());
  }

}
