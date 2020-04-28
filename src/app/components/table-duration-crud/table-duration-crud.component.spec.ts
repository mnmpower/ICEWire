import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDurationCrudComponent } from './table-duration-crud.component';

describe('TableDurationCrudComponent', () => {
  let component: TableDurationCrudComponent;
  let fixture: ComponentFixture<TableDurationCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDurationCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDurationCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
