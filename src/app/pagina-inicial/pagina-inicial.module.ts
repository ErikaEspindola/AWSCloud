import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    FerramentasComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FerramentasComponent
  ]
})
export class PaginaInicialModule { }
