import { Component, OnInit } from '@angular/core';
import { DemandService } from '../_services/demand.service';
import { TypeDemand } from '../model/type-demand';
import { EMPTY, catchError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Demand } from '../model/demand';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-inserimento-richiesta',
  templateUrl: './inserimento-richiesta.component.html',
  styleUrls: ['./inserimento-richiesta.component.css']
})
export class InserimentoRichiestaComponent implements OnInit{

  types: TypeDemand[] = [];
  insertRequestForm!: FormGroup;
  demand!: Demand;

  constructor(private demandService: DemandService, private userAuthService: UserAuthService, private router: Router) {

  }

  ngOnInit(): void {
    
    this.demandService.getTypeDemand().pipe(
      catchError(() => {
        return EMPTY;
      })
    ).subscribe(
      (data: any) => {
        this.types = data;
      }
    )

    this.insertRequestForm = new FormGroup({
      typeDemand: new FormControl('', [Validators.required]),
      absenceDateStart: new FormControl('', [Validators.required]),
      absenceDateEnd: new FormControl(''),
      absenceTimeStart: new FormControl(''),
      absenceTimeEnd: new FormControl(''),
      note: new FormControl('')
    });
  
  }

  insertRequest() {
    
    this.demand = {
      ...this.insertRequestForm.value,
      userName: this.userAuthService.getInfo()
    };

    this.demandService.insertNewDemandRequest(this.demand).pipe(
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
