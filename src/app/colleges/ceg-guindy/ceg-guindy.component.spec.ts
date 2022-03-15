import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegGuindyComponent } from './ceg-guindy.component';

describe('CegGuindyComponent', () => {
  let component: CegGuindyComponent;
  let fixture: ComponentFixture<CegGuindyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CegGuindyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CegGuindyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
