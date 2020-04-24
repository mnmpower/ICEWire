import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChalangeCrudComponent } from './table-chalange-crud.component';

describe('TableChalangeCrudComponent', () => {
  let component: TableChalangeCrudComponent;
  let fixture: ComponentFixture<TableChalangeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableChalangeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChalangeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
