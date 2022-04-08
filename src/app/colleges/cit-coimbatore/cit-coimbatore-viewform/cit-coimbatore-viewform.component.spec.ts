import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitCoimbatoreViewformComponent } from './cit-coimbatore-viewform.component';

describe('CitCoimbatoreViewformComponent', () => {
  let component: CitCoimbatoreViewformComponent;
  let fixture: ComponentFixture<CitCoimbatoreViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitCoimbatoreViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitCoimbatoreViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
