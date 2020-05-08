import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInitiatifComponent } from './card-initiatif.component';

describe('CardInitiatifComponent', () => {
  let component: CardInitiatifComponent;
  let fixture: ComponentFixture<CardInitiatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInitiatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInitiatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
