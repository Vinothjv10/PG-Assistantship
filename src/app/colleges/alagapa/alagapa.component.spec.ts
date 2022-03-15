import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlagapaComponent } from './alagapa.component';

describe('AlagapaComponent', () => {
  let component: AlagapaComponent;
  let fixture: ComponentFixture<AlagapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlagapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlagapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
