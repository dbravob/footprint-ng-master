import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonalComponent } from './page-personal.component';

describe('PagePersonalComponent', () => {
  let component: PagePersonalComponent;
  let fixture: ComponentFixture<PagePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
