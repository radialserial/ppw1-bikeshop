import { Injectable } from '@angular/core';
import { Product } from '../util/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  produtos: Product[] = [];

  addProduto(produto: Product) {
    this.produtos.push(produto);
  }

  getProdutos() {
    return this.produtos;
  }

  limparCarrinho() {
    this.produtos = [];
    return this.produtos;
  }

  removerProduto(produto: Product) {
    this.produtos.splice(this.produtos.indexOf(produto), 1);
  }

}
