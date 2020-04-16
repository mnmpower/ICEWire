import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProjectsCrudComponent } from './table-projects-crud.component';

describe('TableProjectsCrudComponent', () => {
  let component: TableProjectsCrudComponent;
  let fixture: ComponentFixture<TableProjectsCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProjectsCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProjectsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
