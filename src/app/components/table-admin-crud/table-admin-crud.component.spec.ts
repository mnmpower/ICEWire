import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminCrudComponent } from './table-admin-crud.component';

describe('TableAdminCrudComponent', () => {
  let component: TableAdminCrudComponent;
  let fixture: ComponentFixture<TableAdminCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAdminCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
