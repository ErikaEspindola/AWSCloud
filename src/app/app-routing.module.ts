import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroducaoComponent } from './pagina-inicial/introducao/introducao.component';
import { LoginComponent } from './users/login/login.component';
import { PaginaInstanciasComponent } from './instancias/pagina-instancias/pagina-instancias.component';

const routes: Routes = [
  { path: 'pagina-instancias', component: PaginaInstanciasComponent },
  { path: 'pagina-inicial', component: IntroducaoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/pagina-inicial', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
