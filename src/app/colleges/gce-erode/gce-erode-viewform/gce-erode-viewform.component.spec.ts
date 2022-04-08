import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GceErodeViewformComponent } from './gce-erode-viewform.component';

describe('GceErodeViewformComponent', () => {
  let component: GceErodeViewformComponent;
  let fixture: ComponentFixture<GceErodeViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GceErodeViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GceErodeViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
