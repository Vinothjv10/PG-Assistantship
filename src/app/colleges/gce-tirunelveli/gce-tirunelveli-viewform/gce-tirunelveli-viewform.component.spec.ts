import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceTirunelveliViewformComponent } from './gce-tirunelveli-viewform.component';

describe('GceTirunelveliViewformComponent', () => {
  let component: GceTirunelveliViewformComponent;
  let fixture: ComponentFixture<GceTirunelveliViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceTirunelveliViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceTirunelveliViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
