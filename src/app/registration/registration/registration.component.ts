import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';
import { UserRequest } from 'src/app/model/dto/user-request';
import { confirmPasswordValidator } from 'src/app/shared/confirm-password-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  
  registrationForm!: FormGroup;
  userRequest!: UserRequest;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userFirstName: new FormControl('', [Validators.required]),
      userLastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
      rUserPassword: new FormControl('', [Validators.required])
    }, {validators: confirmPasswordValidator('userPassword', 'rUserPassword')})
  }

  register() {

    this.userRequest = {
      ...this.registrationForm.value,
      role: [{idRole: 2}]
    };

    this.userService.registerNewUser(this.userRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        return EMPTY;
      })
    ).subscribe(
      () => {
        this.router.navigateByUrl('/home');
      }
    )

  }

}
