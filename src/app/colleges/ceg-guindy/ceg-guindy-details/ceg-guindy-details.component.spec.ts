import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegGuindyDetailsComponent } from './ceg-guindy-details.component';

describe('CegGuindyDetailsComponent', () => {
  let component: CegGuindyDetailsComponent;
  let fixture: ComponentFixture<CegGuindyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CegGuindyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CegGuindyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
