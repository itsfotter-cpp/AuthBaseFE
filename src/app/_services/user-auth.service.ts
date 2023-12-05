import { Injectable } from '@angular/core';
import { Role } from '../model/role';
import { RoleResponse } from '../model/dto/role-response';


/*
  * It is a service responsible for the communication with the Local Storage.
*/

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: RoleResponse[]) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): Role[] {
    //console.log("LS ROLE:" + localStorage.getItem('roles'));
    return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem("jwtToken")!;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken()
  }


}
