import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GctClgComponent } from './gct-clg.component';

describe('GctClgComponent', () => {
  let component: GctClgComponent;
  let fixture: ComponentFixture<GctClgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GctClgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GctClgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
