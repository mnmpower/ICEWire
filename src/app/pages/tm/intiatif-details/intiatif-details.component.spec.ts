import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntiatifDetailsComponent } from './intiatif-details.component';

describe('IntiatifDetailsComponent', () => {
  let component: IntiatifDetailsComponent;
  let fixture: ComponentFixture<IntiatifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntiatifDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntiatifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
