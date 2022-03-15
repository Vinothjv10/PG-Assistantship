import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAriyalurComponent } from './university-ariyalur.component';

describe('UniversityAriyalurComponent', () => {
  let component: UniversityAriyalurComponent;
  let fixture: ComponentFixture<UniversityAriyalurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityAriyalurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAriyalurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
