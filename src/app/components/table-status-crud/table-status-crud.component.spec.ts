import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStatusCrudComponent } from './table-status-crud.component';

describe('TableStatusCrudComponent', () => {
  let component: TableStatusCrudComponent;
  let fixture: ComponentFixture<TableStatusCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStatusCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStatusCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
