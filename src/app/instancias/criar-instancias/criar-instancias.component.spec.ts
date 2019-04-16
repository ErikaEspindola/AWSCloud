import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarInstanciasComponent } from './criar-instancias.component';

describe('CriarInstanciasComponent', () => {
  let component: CriarInstanciasComponent;
  let fixture: ComponentFixture<CriarInstanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarInstanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarInstanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
