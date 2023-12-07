import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionePresenzeComponent } from './gestione-presenze.component';

describe('GestionePresenzeComponent', () => {
  let component: GestionePresenzeComponent;
  let fixture: ComponentFixture<GestionePresenzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionePresenzeComponent]
    });
    fixture = TestBed.createComponent(GestionePresenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
