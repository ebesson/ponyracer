import { PonyModel } from './../models/pony.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent {

  @Input() ponyModel: PonyModel;

  @Output() ponyClicked = new EventEmitter();

  constructor() {}

  getPonyImageUrl() {
    return `assets/images/pony-${this.ponyModel.color.toLowerCase()}.gif`;
  }

  clicked(): void {
    this.ponyClicked.emit(this.ponyModel);
    this.ponyClicked.complete();
  }

}
