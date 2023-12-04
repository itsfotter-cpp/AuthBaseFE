import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { JwtResponse } from '../model/jwt-response';
import { Role } from '../model/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  jwtResponse: JwtResponse | undefined;

  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) {

  }

  /*
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe({
      next: (res: any) => {
        this.userAuthService.setRoles(res.user.role);
        this.userAuthService.setToken(res.jwtToken);
        const role = res.user.role[0].roleName;
        
        if(role === "admin") {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  */
  
  
  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe({
      next: (res: JwtResponse) => {
        this.jwtResponse = res;
        this.userAuthService.setRoles(this.jwtResponse.user.role);
        this.userAuthService.setToken(this.jwtResponse.jwtToken);              
        
        if(this.jwtResponse.user.role.find(obj => obj.roleName === 'admin')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      error : (err: any) => {
        console.log(err);
      }
    });
  }
  

}
