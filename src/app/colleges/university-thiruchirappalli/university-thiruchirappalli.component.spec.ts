import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityThiruchirappalliComponent } from './university-thiruchirappalli.component';

describe('UniversityThiruchirappalliComponent', () => {
  let component: UniversityThiruchirappalliComponent;
  let fixture: ComponentFixture<UniversityThiruchirappalliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityThiruchirappalliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityThiruchirappalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
