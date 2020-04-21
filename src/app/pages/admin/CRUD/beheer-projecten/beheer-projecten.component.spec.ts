import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerProjectenComponent } from './beheer-projecten.component';

describe('BeheerProjectenComponent', () => {
  let component: BeheerProjectenComponent;
  let fixture: ComponentFixture<BeheerProjectenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerProjectenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerProjectenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
