import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerAdminsComponent } from './beheer-admins.component';

describe('BeheerAdminsComponent', () => {
  let component: BeheerAdminsComponent;
  let fixture: ComponentFixture<BeheerAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
