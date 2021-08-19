import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCoberturaNuevaComponent } from './consulta-cobertura-nueva.component';

describe('ConsultaCoberturaNuevaComponent', () => {
  let component: ConsultaCoberturaNuevaComponent;
  let fixture: ComponentFixture<ConsultaCoberturaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCoberturaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCoberturaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
