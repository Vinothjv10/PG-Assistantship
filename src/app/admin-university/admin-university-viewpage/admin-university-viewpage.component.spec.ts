import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversityViewpageComponent } from './admin-university-viewpage.component';

describe('AdminUniversityViewpageComponent', () => {
  let component: AdminUniversityViewpageComponent;
  let fixture: ComponentFixture<AdminUniversityViewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUniversityViewpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversityViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
