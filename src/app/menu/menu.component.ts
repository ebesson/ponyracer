import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserModel } from './../models/user.model';
import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  navbarCollapsed = true;
  user: UserModel;
  userEventsSubscription: Subscription;

  constructor(private userService: UserService) {}

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
    return this.navbarCollapsed;
  }

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(
      user => this.user = user
    );
  }

  ngOnDestroy() {
     this.userEventsSubscription.unsubscribe();
  }

}
