import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiagarajarMaduraiComponent } from './thiagarajar-madurai.component';

describe('ThiagarajarMaduraiComponent', () => {
  let component: ThiagarajarMaduraiComponent;
  let fixture: ComponentFixture<ThiagarajarMaduraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThiagarajarMaduraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiagarajarMaduraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
