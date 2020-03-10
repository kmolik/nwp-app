import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSelectComponent } from './db-select.component';

describe('DbSelectComponent', () => {
  let component: DbSelectComponent;
  let fixture: ComponentFixture<DbSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
