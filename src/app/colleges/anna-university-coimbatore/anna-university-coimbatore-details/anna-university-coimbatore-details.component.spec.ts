import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityCoimbatoreDetailsComponent } from './anna-university-coimbatore-details.component';

describe('AnnaUniversityCoimbatoreDetailsComponent', () => {
  let component: AnnaUniversityCoimbatoreDetailsComponent;
  let fixture: ComponentFixture<AnnaUniversityCoimbatoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityCoimbatoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityCoimbatoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
