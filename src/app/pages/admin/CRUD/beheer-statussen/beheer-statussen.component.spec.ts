import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerStatussenComponent } from './beheer-statussen.component';

describe('BeheerStatussenComponent', () => {
  let component: BeheerStatussenComponent;
  let fixture: ComponentFixture<BeheerStatussenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerStatussenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerStatussenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
