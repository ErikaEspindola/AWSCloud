import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInstanciasComponent } from './listar-instancias/listar-instancias.component';
import { CriarInstanciasComponent } from './criar-instancias/criar-instancias.component';

@NgModule({
  declarations: [ListarInstanciasComponent, CriarInstanciasComponent],
  imports: [
    CommonModule
  ]
})
export class InstanciasModule { }
