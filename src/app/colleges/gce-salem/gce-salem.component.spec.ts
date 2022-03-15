import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceSalemComponent } from './gce-salem.component';

describe('GceSalemComponent', () => {
  let component: GceSalemComponent;
  let fixture: ComponentFixture<GceSalemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceSalemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceSalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
