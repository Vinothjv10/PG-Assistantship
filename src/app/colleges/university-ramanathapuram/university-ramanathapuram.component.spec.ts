import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRamanathapuramComponent } from './university-ramanathapuram.component';

describe('UniversityRamanathapuramComponent', () => {
  let component: UniversityRamanathapuramComponent;
  let fixture: ComponentFixture<UniversityRamanathapuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityRamanathapuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRamanathapuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
