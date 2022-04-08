import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitCoimbatoreDetailsComponent } from './cit-coimbatore-details.component';

describe('CitCoimbatoreDetailsComponent', () => {
  let component: CitCoimbatoreDetailsComponent;
  let fixture: ComponentFixture<CitCoimbatoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitCoimbatoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitCoimbatoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
