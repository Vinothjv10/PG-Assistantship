import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityMaduraiViewformComponent } from './anna-university-madurai-viewform.component';

describe('AnnaUniversityMaduraiViewformComponent', () => {
  let component: AnnaUniversityMaduraiViewformComponent;
  let fixture: ComponentFixture<AnnaUniversityMaduraiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityMaduraiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityMaduraiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
