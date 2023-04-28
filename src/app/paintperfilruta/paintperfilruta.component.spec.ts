import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintperfilrutaComponent } from './paintperfilruta.component';

describe('PaintperfilrutaComponent', () => {
  let component: PaintperfilrutaComponent;
  let fixture: ComponentFixture<PaintperfilrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintperfilrutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintperfilrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
