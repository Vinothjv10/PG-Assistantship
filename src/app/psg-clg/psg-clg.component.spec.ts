import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsgClgComponent } from './psg-clg.component';

describe('PsgClgComponent', () => {
  let component: PsgClgComponent;
  let fixture: ComponentFixture<PsgClgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsgClgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsgClgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
