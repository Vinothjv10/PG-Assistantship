import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThirukkuvalaiComponent } from './university-thirukkuvalai.component';

describe('UniversityThirukkuvalaiComponent', () => {
  let component: UniversityThirukkuvalaiComponent;
  let fixture: ComponentFixture<UniversityThirukkuvalaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThirukkuvalaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThirukkuvalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
