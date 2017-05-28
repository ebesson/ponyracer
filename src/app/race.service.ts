import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RaceModel } from './models/race.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RaceService {

  constructor() { }

  list(): Observable<Array<RaceModel>> {
    const races: Observable<Array<RaceModel>> = Observable.of([
      {name: 'Lyon'},
      {name: 'Los Angeles'},
      {name: 'Sydney'},
      {name: 'Tokyo'},
      {name: 'Casablanca'}
    ]);
    return races;
  }

}
