import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitChennaiComponent } from './mit-chennai.component';

describe('MitChennaiComponent', () => {
  let component: MitChennaiComponent;
  let fixture: ComponentFixture<MitChennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitChennaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
