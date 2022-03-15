import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriyarVellorComponent } from './periyar-vellor.component';

describe('PeriyarVellorComponent', () => {
  let component: PeriyarVellorComponent;
  let fixture: ComponentFixture<PeriyarVellorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriyarVellorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriyarVellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
