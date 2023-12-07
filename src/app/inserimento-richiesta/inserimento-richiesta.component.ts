import { Component, OnInit } from '@angular/core';
import { DemandService } from '../_services/demand.service';
import { TypeDemand } from '../model/type-demand';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-inserimento-richiesta',
  templateUrl: './inserimento-richiesta.component.html',
  styleUrls: ['./inserimento-richiesta.component.css']
})
export class InserimentoRichiestaComponent implements OnInit{

  types: TypeDemand[] = [];
  selectedItem: TypeDemand | undefined;

  constructor(private demandService: DemandService) {

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
  

  }



}
