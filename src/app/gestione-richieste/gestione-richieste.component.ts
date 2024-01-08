import { Component, OnInit } from '@angular/core';
import { DemandService } from '../_services/demand.service';
import { Demand } from '../model/demand';
import { EMPTY, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from '../shared/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-gestione-richieste',
  templateUrl: './gestione-richieste.component.html',
  styleUrls: ['./gestione-richieste.component.css'],
})
export class GestioneRichiesteComponent implements OnInit{
  
  demands: Demand[] = [];

  constructor(
      private demandService: DemandService,
      private datePipe: DatePipe,
      private modalService: NgbModal) {

  }

  ngOnInit(): void {
    
    this.demandService.getAllDemands().pipe(
      catchError((err: HttpErrorResponse) => {
        return EMPTY;
      })
    ).subscribe(
      (_demands) => {
        this.demands = _demands;
      }
    );

  }

  openModal() {
    const modalRef = this.modalService.open(ModalDialogComponent);
    modalRef.componentInstance.title = "Note";

    modalRef.result.then(
      (result) => {
        console.log(`Modale chiuso con risultato: ${result}`);
      },
      (reason) => {
        console.log(`Modale chiuso con motivo: ${reason}`);
      }
    );
    
  }

}

