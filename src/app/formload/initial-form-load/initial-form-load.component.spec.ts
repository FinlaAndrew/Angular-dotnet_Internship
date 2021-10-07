import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialFormLoadComponent } from './initial-form-load.component';

describe('InitialFormLoadComponent', () => {
  let component: InitialFormLoadComponent;
  let fixture: ComponentFixture<InitialFormLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialFormLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialFormLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
