import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityTirunelveliViewformComponent } from './anna-university-tirunelveli-viewform.component';

describe('AnnaUniversityTirunelveliViewformComponent', () => {
  let component: AnnaUniversityTirunelveliViewformComponent;
  let fixture: ComponentFixture<AnnaUniversityTirunelveliViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityTirunelveliViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityTirunelveliViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
