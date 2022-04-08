import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GctCoimbatoreDetailsComponent } from './gct-coimbatore-details.component';

describe('GctCoimbatoreDetailsComponent', () => {
  let component: GctCoimbatoreDetailsComponent;
  let fixture: ComponentFixture<GctCoimbatoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GctCoimbatoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GctCoimbatoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
