import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceErodeDetailsComponent } from './gce-erode-details.component';

describe('GceErodeDetailsComponent', () => {
  let component: GceErodeDetailsComponent;
  let fixture: ComponentFixture<GceErodeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceErodeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceErodeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
