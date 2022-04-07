import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceSalemViewformComponent } from './gce-salem-viewform.component';

describe('GceSalemViewformComponent', () => {
  let component: GceSalemViewformComponent;
  let fixture: ComponentFixture<GceSalemViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceSalemViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceSalemViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
