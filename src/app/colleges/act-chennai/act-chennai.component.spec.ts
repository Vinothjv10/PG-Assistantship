import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActChennaiComponent } from './act-chennai.component';

describe('ActChennaiComponent', () => {
  let component: ActChennaiComponent;
  let fixture: ComponentFixture<ActChennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActChennaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
