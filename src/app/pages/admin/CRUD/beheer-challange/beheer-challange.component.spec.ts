import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerChallangeComponent } from './beheer-challange.component';

describe('BeheerChallangeComponent', () => {
  let component: BeheerChallangeComponent;
  let fixture: ComponentFixture<BeheerChallangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerChallangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
