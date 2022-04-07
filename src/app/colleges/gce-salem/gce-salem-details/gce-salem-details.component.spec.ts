import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceSalemDetailsComponent } from './gce-salem-details.component';

describe('GceSalemDetailsComponent', () => {
  let component: GceSalemDetailsComponent;
  let fixture: ComponentFixture<GceSalemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceSalemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceSalemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
