import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { MatIconModule } from '@angular/material';
import { FluxoComponent } from './fluxo/fluxo.component';

@NgModule({
  declarations: [
    FerramentasComponent,
    FluxoComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FerramentasComponent,
    FluxoComponent
  ]
})
export class PaginaInicialModule { }
