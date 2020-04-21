import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerInitiatievenComponent } from './beheer-initiatieven.component';

describe('BeheerInitiatievenComponent', () => {
  let component: BeheerInitiatievenComponent;
  let fixture: ComponentFixture<BeheerInitiatievenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerInitiatievenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerInitiatievenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
