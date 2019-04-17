import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInstanciasComponent } from './pagina-instancias.component';

describe('PaginaInstanciasComponent', () => {
  let component: PaginaInstanciasComponent;
  let fixture: ComponentFixture<PaginaInstanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaInstanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
