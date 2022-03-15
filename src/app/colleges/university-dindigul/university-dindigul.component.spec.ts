import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDindigulComponent } from './university-dindigul.component';

describe('UniversityDindigulComponent', () => {
  let component: UniversityDindigulComponent;
  let fixture: ComponentFixture<UniversityDindigulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityDindigulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDindigulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
