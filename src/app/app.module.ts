import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaInicioComponent } from './paginas/pagina-inicio/pagina-inicio.component';
import { MenuSidenavComponent } from './componentes/menu-sidenav/menu-sidenav.component';
import { CarrinhoComponent } from './paginas/carrinho/carrinho.component';
import { CardProdutoComponent } from './componentes/card-produto/card-produto.component';
import { ResultadosComponent } from './paginas/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    MenuSidenavComponent,
    CarrinhoComponent,
    CardProdutoComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
