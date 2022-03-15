import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityCoimbatoreComponent } from './anna-university-coimbatore.component';

describe('AnnaUniversityCoimbatoreComponent', () => {
  let component: AnnaUniversityCoimbatoreComponent;
  let fixture: ComponentFixture<AnnaUniversityCoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityCoimbatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityCoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
