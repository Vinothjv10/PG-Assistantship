import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityTirunelveliDetailsComponent } from './anna-university-tirunelveli-details.component';

describe('AnnaUniversityTirunelveliDetailsComponent', () => {
  let component: AnnaUniversityTirunelveliDetailsComponent;
  let fixture: ComponentFixture<AnnaUniversityTirunelveliDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityTirunelveliDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityTirunelveliDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
