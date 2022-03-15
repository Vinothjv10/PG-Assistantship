import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceBargurComponent } from './gce-bargur.component';

describe('GceBargurComponent', () => {
  let component: GceBargurComponent;
  let fixture: ComponentFixture<GceBargurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceBargurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceBargurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
