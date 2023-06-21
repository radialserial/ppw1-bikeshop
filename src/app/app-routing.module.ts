import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './paginas/pagina-inicio/pagina-inicio.component';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';

const routes: Routes = [
  { path: 'inicio', component: PaginaInicioComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
