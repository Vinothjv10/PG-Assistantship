import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeNameComponent } from './college-name.component';

describe('CollegeNameComponent', () => {
  let component: CollegeNameComponent;
  let fixture: ComponentFixture<CollegeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
