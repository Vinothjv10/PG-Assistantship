import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityKanchepuramComponent } from './university-kanchepuram.component';

describe('UniversityKanchepuramComponent', () => {
  let component: UniversityKanchepuramComponent;
  let fixture: ComponentFixture<UniversityKanchepuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityKanchepuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityKanchepuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
