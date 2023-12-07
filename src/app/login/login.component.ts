import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { JwtResponse } from '../model/dto/jwt-response';
import { JwtRequest } from '../model/dto/jwt-request';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  jwtResponse!: JwtResponse;
  jwtRequest!: JwtRequest;
  loginForm!: FormGroup;

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) {

  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required])
    })
  }
  
  login(loginForm: NgForm) {

    this.jwtRequest = {
      userName: this.loginForm.get('userName')?.value,
      userPassword: this.loginForm.get('userPassword')?.value
    };

    this.userService.login(this.jwtRequest).pipe(
      catchError(() => {
        return EMPTY;
      })
    ).subscribe(
      (res: JwtResponse) => {
        this.jwtResponse = res;
        this.userAuthService.setRoles(this.jwtResponse.user.role);
        this.userAuthService.setToken(this.jwtResponse.jwtToken);              
        
        if(this.jwtResponse.user.role.find(obj => obj.roleName === 'admin')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    );
  }
  

}
