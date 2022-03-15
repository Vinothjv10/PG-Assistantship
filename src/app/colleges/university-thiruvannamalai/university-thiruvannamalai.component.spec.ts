import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThiruvannamalaiComponent } from './university-thiruvannamalai.component';

describe('UniversityThiruvannamalaiComponent', () => {
  let component: UniversityThiruvannamalaiComponent;
  let fixture: ComponentFixture<UniversityThiruvannamalaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThiruvannamalaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThiruvannamalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
