import { CommonModule } from "@angular/common";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [ModalDialogComponent],
    imports: [CommonModule, NgbModule],
    exports: [ModalDialogComponent],
  })
  export class MyModalModule {

  }