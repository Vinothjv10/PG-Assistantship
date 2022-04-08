import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityMaduraiDetailsComponent } from './anna-university-madurai-details.component';

describe('AnnaUniversityMaduraiDetailsComponent', () => {
  let component: AnnaUniversityMaduraiDetailsComponent;
  let fixture: ComponentFixture<AnnaUniversityMaduraiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityMaduraiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityMaduraiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
