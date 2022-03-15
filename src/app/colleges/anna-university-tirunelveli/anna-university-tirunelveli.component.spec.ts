import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaUniversityTirunelveliComponent } from './anna-university-tirunelveli.component';

describe('AnnaUniversityTirunelveliComponent', () => {
  let component: AnnaUniversityTirunelveliComponent;
  let fixture: ComponentFixture<AnnaUniversityTirunelveliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaUniversityTirunelveliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaUniversityTirunelveliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
