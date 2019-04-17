import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInstanciasComponent } from './listar-instancias/listar-instancias.component';
import { CriarInstanciasComponent } from './criar-instancias/criar-instancias.component';
import { PaginaInstanciasComponent } from './pagina-instancias/pagina-instancias.component';

@NgModule({
  declarations: [ListarInstanciasComponent, CriarInstanciasComponent, PaginaInstanciasComponent],
  imports: [
    CommonModule
  ]
})
export class InstanciasModule { }
