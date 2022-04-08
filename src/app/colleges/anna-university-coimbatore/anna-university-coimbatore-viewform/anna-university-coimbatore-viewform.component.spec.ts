import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityCoimbatoreViewformComponent } from './anna-university-coimbatore-viewform.component';

describe('AnnaUniversityCoimbatoreViewformComponent', () => {
  let component: AnnaUniversityCoimbatoreViewformComponent;
  let fixture: ComponentFixture<AnnaUniversityCoimbatoreViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityCoimbatoreViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityCoimbatoreViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
