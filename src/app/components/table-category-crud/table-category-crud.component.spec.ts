import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCategoryCrudComponent } from './table-category-crud.component';

describe('TableCategoryCrudComponent', () => {
  let component: TableCategoryCrudComponent;
  let fixture: ComponentFixture<TableCategoryCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCategoryCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCategoryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
