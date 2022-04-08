import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceBargurViewformComponent } from './gce-bargur-viewform.component';

describe('GceBargurViewformComponent', () => {
  let component: GceBargurViewformComponent;
  let fixture: ComponentFixture<GceBargurViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceBargurViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceBargurViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
