import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgCoimbatoreComponent } from './psg-coimbatore.component';

describe('PsgCoimbatoreComponent', () => {
  let component: PsgCoimbatoreComponent;
  let fixture: ComponentFixture<PsgCoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsgCoimbatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgCoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
