import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosmadridComponent } from './serviciosmadrid.component';

describe('ServiciosmadridComponent', () => {
  let component: ServiciosmadridComponent;
  let fixture: ComponentFixture<ServiciosmadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosmadridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosmadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
