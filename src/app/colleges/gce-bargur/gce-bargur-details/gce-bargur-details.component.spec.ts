import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceBargurDetailsComponent } from './gce-bargur-details.component';

describe('GceBargurDetailsComponent', () => {
  let component: GceBargurDetailsComponent;
  let fixture: ComponentFixture<GceBargurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceBargurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceBargurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
