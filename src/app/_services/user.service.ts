import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';
import { JwtResponse } from '../model/jwt-response';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:9090";
  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  userRoles: Role[] | undefined;

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData: any):Observable<JwtResponse> {    
    return this.httpClient.post<JwtResponse>(this.PATH_OF_API + "/authenticate", loginData, { headers: this.requestHeader });
  }

  public forUser() {
    return this.httpClient.get(this.PATH_OF_API + "/forUser", {responseType: "text"});
  }

  public forAdmin() {
    return this.httpClient.get(this.PATH_OF_API + "/forAdmin", {responseType: "text"});
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    this.userRoles = this.userAuthService.getRoles();
    
    if (this.userRoles != null && this.userRoles) {
      for (let i = 0; i < this.userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
                  
          if (this.userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    
    return isMatch;
  }

}
