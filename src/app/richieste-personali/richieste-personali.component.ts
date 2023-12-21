import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { Demand } from '../model/demand';
import { DemandService } from '../_services/demand.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-richieste-personali',
  templateUrl: './richieste-personali.component.html',
  styleUrls: ['./richieste-personali.component.css']
})
export class RichiestePersonaliComponent {

  demands: Demand[] = [];

  constructor(private userAuthService: UserAuthService, private demandService: DemandService, private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    
    this.demandService.getDemandsFromUser(this.userAuthService.getInfo()).pipe(
      catchError((err: HttpErrorResponse) => {
        return EMPTY;
      })
    ).subscribe(
      (_demands) => {
        this.demands = _demands;
      }
    );

  }

}
