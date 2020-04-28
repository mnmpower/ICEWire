import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerLeeftijdComponent } from './beheer-leeftijd.component';

describe('BeheerLeeftijdComponent', () => {
  let component: BeheerLeeftijdComponent;
  let fixture: ComponentFixture<BeheerLeeftijdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerLeeftijdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerLeeftijdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
