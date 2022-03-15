import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityVillupuramComponent } from './university-villupuram.component';

describe('UniversityVillupuramComponent', () => {
  let component: UniversityVillupuramComponent;
  let fixture: ComponentFixture<UniversityVillupuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityVillupuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityVillupuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
