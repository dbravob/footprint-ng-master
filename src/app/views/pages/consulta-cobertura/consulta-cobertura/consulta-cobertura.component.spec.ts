import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCoberturaComponent } from './consulta-cobertura.component';

describe('ConsultaCoberturaComponent', () => {
  let component: ConsultaCoberturaComponent;
  let fixture: ComponentFixture<ConsultaCoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
