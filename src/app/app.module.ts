import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatSortModule, MatCheckboxModule, MatTabsModule, MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material';

import { MyNavComponent } from 'src/app/my-nav/my-nav.component';
import { PaginaInicialModule } from 'src/app/pagina-inicial/pagina-inicial.module';

import { CriarInstanciasComponent } from './instancias/criar-instancias/criar-instancias.component';
import { ListarInstanciasComponent } from './instancias/listar-instancias/listar-instancias.component';
import { IntroducaoComponent } from './pagina-inicial/introducao/introducao.component';
import { LoginComponent } from './users/login/login.component';
import { PaginaInstanciasComponent } from './instancias/pagina-instancias/pagina-instancias.component';
import { InstanciasService } from './instancias/instancias.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CriarInstanciasComponent,
    ListarInstanciasComponent,
    PaginaInstanciasComponent,
    IntroducaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PaginaInicialModule,
    AngularFontAwesomeModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatTabsModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    IntroducaoComponent
  ],
  providers: [
    InstanciasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
