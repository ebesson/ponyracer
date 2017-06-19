import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordForm: FormGroup;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;

  userForm: FormGroup;
  loginCtrl: FormControl;
  birthYearCtrl: FormControl;
  registrationFailed: boolean;

  static passwordMatch(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { matchingError: true };
  }

  static validYear(control: FormControl) {
    const birthYear = control.value;
    const nextYear = new Date().getFullYear() + 1;
    return (birthYear > 1900 && birthYear < nextYear)  ? null : {invalidYear: true};
  }

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit() {
    // we will have to build the form
    this.passwordCtrl = this.fb.control('', Validators.minLength(3));
    this.confirmPasswordCtrl = this.fb.control('');
    this.passwordForm = this.fb.group(
      { password: this.passwordCtrl, confirmPassword: this.confirmPasswordCtrl },
      { validator: RegisterComponent.passwordMatch }
    );

    this.loginCtrl = this.fb.control('');
    this.birthYearCtrl = this.fb.control('', RegisterComponent.validYear);
    this.userForm = this.fb.group({
      login: this.loginCtrl,
      passwordForm: this.passwordForm,
      birthYear: this.birthYearCtrl,
    });
  }

  register(): void {
     // we will have to handle the submission
     const login = this.userForm.value.login;
     const birthYear = this.userForm.value.birthYear;
     const password = this.userForm.value.passwordForm.password;

     this.userService.register(login, password, birthYear).subscribe(
       userCreated => this.router.navigate(['/']),
       error => this.registrationFailed = true
     );

  }
}
