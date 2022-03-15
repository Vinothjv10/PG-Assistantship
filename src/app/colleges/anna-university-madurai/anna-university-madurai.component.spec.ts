import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityMaduraiComponent } from './anna-university-madurai.component';

describe('AnnaUniversityMaduraiComponent', () => {
  let component: AnnaUniversityMaduraiComponent;
  let fixture: ComponentFixture<AnnaUniversityMaduraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityMaduraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityMaduraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
