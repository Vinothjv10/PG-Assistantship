import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActChennaiDetailsComponent } from './act-chennai-details.component';

describe('ActChennaiDetailsComponent', () => {
  let component: ActChennaiDetailsComponent;
  let fixture: ComponentFixture<ActChennaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActChennaiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActChennaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
