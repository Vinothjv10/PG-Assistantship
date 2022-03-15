import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityNagercoilComponent } from './university-nagercoil.component';

describe('UniversityNagercoilComponent', () => {
  let component: UniversityNagercoilComponent;
  let fixture: ComponentFixture<UniversityNagercoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityNagercoilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityNagercoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
