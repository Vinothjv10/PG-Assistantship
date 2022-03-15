import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThindivanamComponent } from './university-thindivanam.component';

describe('UniversityThindivanamComponent', () => {
  let component: UniversityThindivanamComponent;
  let fixture: ComponentFixture<UniversityThindivanamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThindivanamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThindivanamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
