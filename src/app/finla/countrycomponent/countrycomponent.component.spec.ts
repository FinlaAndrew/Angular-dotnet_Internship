import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycomponentComponent } from './countrycomponent.component';

describe('CountrycomponentComponent', () => {
  let component: CountrycomponentComponent;
  let fixture: ComponentFixture<CountrycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
