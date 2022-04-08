import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActChennaiViewformComponent } from './act-chennai-viewform.component';

describe('ActChennaiViewformComponent', () => {
  let component: ActChennaiViewformComponent;
  let fixture: ComponentFixture<ActChennaiViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActChennaiViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActChennaiViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
