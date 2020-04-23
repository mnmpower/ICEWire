import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePersonCrudComponent } from './table-person-crud.component';

describe('TablePersonCrudComponent', () => {
  let component: TablePersonCrudComponent;
  let fixture: ComponentFixture<TablePersonCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePersonCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePersonCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
