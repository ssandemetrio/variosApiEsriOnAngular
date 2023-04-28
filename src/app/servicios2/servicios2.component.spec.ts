import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicios2Component } from './servicios2.component';

describe('Servicios2Component', () => {
  let component: Servicios2Component;
  let fixture: ComponentFixture<Servicios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicios2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
