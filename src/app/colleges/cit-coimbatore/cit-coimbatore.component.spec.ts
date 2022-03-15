import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitCoimbatoreComponent } from './cit-coimbatore.component';

describe('CitCoimbatoreComponent', () => {
  let component: CitCoimbatoreComponent;
  let fixture: ComponentFixture<CitCoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitCoimbatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitCoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
