import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInitiatifCrudComponent } from './table-initiatif-crud.component';

describe('TableInitiatifCrudComponent', () => {
  let component: TableInitiatifCrudComponent;
  let fixture: ComponentFixture<TableInitiatifCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInitiatifCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInitiatifCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
