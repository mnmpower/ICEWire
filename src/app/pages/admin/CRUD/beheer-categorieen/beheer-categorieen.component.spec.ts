import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerCategorieenComponent } from './beheer-categorieen.component';

describe('BeheerCategorieenComponent', () => {
  let component: BeheerCategorieenComponent;
  let fixture: ComponentFixture<BeheerCategorieenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerCategorieenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerCategorieenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
