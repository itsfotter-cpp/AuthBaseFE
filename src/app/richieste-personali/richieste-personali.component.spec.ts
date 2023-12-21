import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestePersonaliComponent } from './richieste-personali.component';

describe('RichiestePersonaliComponent', () => {
  let component: RichiestePersonaliComponent;
  let fixture: ComponentFixture<RichiestePersonaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RichiestePersonaliComponent]
    });
    fixture = TestBed.createComponent(RichiestePersonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
