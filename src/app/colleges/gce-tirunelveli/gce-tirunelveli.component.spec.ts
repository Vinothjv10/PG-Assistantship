import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceTirunelveliComponent } from './gce-tirunelveli.component';

describe('GceTirunelveliComponent', () => {
  let component: GceTirunelveliComponent;
  let fixture: ComponentFixture<GceTirunelveliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceTirunelveliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceTirunelveliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
