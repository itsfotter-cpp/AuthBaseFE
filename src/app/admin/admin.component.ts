import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  message: string = "";
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.forAdmin();
  }

  forAdmin() {
    this.userService.forAdmin().subscribe({
      next: (response: any) => {
        console.log(response);
        this.message = response;
      },
      error: (error: any) => {
        console.log(error);
        this.message = error;
      }
    });
  }

}
