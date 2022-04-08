import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlagapaViewformComponent } from './alagapa-viewform.component';

describe('AlagapaViewformComponent', () => {
  let component: AlagapaViewformComponent;
  let fixture: ComponentFixture<AlagapaViewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlagapaViewformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlagapaViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
