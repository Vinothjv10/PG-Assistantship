import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GctCoimbatoreViewformComponent } from './gct-coimbatore-viewform.component';

describe('GctCoimbatoreViewformComponent', () => {
  let component: GctCoimbatoreViewformComponent;
  let fixture: ComponentFixture<GctCoimbatoreViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GctCoimbatoreViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GctCoimbatoreViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
