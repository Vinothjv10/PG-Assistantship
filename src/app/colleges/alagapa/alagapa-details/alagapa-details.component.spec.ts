import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlagapaDetailsComponent } from './alagapa-details.component';

describe('AlagapaDetailsComponent', () => {
  let component: AlagapaDetailsComponent;
  let fixture: ComponentFixture<AlagapaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlagapaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlagapaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
