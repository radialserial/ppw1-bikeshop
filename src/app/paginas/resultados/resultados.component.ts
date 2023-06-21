import { provideImageKitLoader } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from 'src/app/servicos/cart.service';
import { Product } from 'src/app/util/product';
import { PRODUCTS } from 'src/app/util/products';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {

  constructor(
    private servicoCarrinho: CartService,
  ) { }

  produtos: Product[] = PRODUCTS;


  addCarrinho(produto: Product) {
    this.servicoCarrinho.addProduto(produto);
  }

  removerCarrihno(produto: Product) {
    this.servicoCarrinho.removerProduto(produto);
  }

}
