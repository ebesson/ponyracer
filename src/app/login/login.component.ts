import { CredentialModel } from './../models/credential.model';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: CredentialModel;
  authenticationFailed = true;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.credentials = {login: '', password: ''};
  }

  authenticate() {
    this.userService.authenticate(this.credentials).subscribe(
      success => {
        this.authenticationFailed = false;
        return this.router.navigate(['/'])
      },
      error => this.authenticationFailed = true
    );
  }

  isFormValid() {
    return this.credentials.login !== '' && this.credentials.password !== '';
  }

}
