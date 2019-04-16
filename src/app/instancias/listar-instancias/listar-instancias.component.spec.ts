import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInstanciasComponent } from './listar-instancias.component';

describe('ListarInstanciasComponent', () => {
  let component: ListarInstanciasComponent;
  let fixture: ComponentFixture<ListarInstanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInstanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
