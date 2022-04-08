import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceTirunelveliDetailsComponent } from './gce-tirunelveli-details.component';

describe('GceTirunelveliDetailsComponent', () => {
  let component: GceTirunelveliDetailsComponent;
  let fixture: ComponentFixture<GceTirunelveliDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceTirunelveliDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceTirunelveliDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
