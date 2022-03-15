import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPanrutiComponent } from './university-panruti.component';

describe('UniversityPanrutiComponent', () => {
  let component: UniversityPanrutiComponent;
  let fixture: ComponentFixture<UniversityPanrutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPanrutiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPanrutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
