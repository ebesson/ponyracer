import { RaceModel } from './models/race.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RaceService {

  constructor() { }

  list() {
    const races: Array<RaceModel> = [{name: 'Tokyo'}, {name: 'Paris'}];
    return races;
  }

}
