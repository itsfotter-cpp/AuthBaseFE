import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoRichiestaComponent } from './inserimento-richiesta.component';

describe('InserimentoRichiestaComponent', () => {
  let component: InserimentoRichiestaComponent;
  let fixture: ComponentFixture<InserimentoRichiestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserimentoRichiestaComponent]
    });
    fixture = TestBed.createComponent(InserimentoRichiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
