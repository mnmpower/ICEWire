import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerTijdsduurComponent } from './beheer-tijdsduur.component';

describe('BeheerTijdsduurComponent', () => {
  let component: BeheerTijdsduurComponent;
  let fixture: ComponentFixture<BeheerTijdsduurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerTijdsduurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerTijdsduurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
