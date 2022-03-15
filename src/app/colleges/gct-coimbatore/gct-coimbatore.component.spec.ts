import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GctCoimbatoreComponent } from './gct-coimbatore.component';

describe('GctCoimbatoreComponent', () => {
  let component: GctCoimbatoreComponent;
  let fixture: ComponentFixture<GctCoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GctCoimbatoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GctCoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
