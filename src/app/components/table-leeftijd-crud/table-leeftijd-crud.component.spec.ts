import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeeftijdCrudComponent } from './table-leeftijd-crud.component';

describe('TableLeeftijdCrudComponent', () => {
  let component: TableLeeftijdCrudComponent;
  let fixture: ComponentFixture<TableLeeftijdCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLeeftijdCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLeeftijdCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
