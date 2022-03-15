import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceErodeComponent } from './gce-erode.component';

describe('GceErodeComponent', () => {
  let component: GceErodeComponent;
  let fixture: ComponentFixture<GceErodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceErodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceErodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
