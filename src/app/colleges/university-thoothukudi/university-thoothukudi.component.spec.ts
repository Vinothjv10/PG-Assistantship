import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThoothukudiComponent } from './university-thoothukudi.component';

describe('UniversityThoothukudiComponent', () => {
  let component: UniversityThoothukudiComponent;
  let fixture: ComponentFixture<UniversityThoothukudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThoothukudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThoothukudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
