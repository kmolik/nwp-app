import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsFormModalComponent } from './buildings-form-modal.component';

describe('BuildingsFormModalComponent', () => {
  let component: BuildingsFormModalComponent;
  let fixture: ComponentFixture<BuildingsFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingsFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
