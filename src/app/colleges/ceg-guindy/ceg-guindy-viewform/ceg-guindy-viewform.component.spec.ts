import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegGuindyViewformComponent } from './ceg-guindy-viewform.component';

describe('CegGuindyViewformComponent', () => {
  let component: CegGuindyViewformComponent;
  let fixture: ComponentFixture<CegGuindyViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CegGuindyViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CegGuindyViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
