import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { DemandService } from '../_services/demand.service';
import { Demand } from '../model/demand';
import { EMPTY, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-gestione-richieste',
  templateUrl: './gestione-richieste.component.html',
  styleUrls: ['./gestione-richieste.component.css'],
})
export class GestioneRichiesteComponent implements OnInit{
  
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

