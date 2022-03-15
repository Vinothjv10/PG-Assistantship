import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPattukodaiComponent } from './university-pattukodai.component';

describe('UniversityPattukodaiComponent', () => {
  let component: UniversityPattukodaiComponent;
  let fixture: ComponentFixture<UniversityPattukodaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPattukodaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPattukodaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
