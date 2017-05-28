import { RaceModel } from './../models/race.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent {

  @Input() raceModel: RaceModel;

  constructor() { }

}
