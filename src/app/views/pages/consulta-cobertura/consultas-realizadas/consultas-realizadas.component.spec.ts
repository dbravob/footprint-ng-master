import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasRealizadasComponent } from './consultas-realizadas.component';

describe('ConsultaCoberturaComponent', () => {
  let component: ConsultasRealizadasComponent;
  let fixture: ComponentFixture<ConsultasRealizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasRealizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
