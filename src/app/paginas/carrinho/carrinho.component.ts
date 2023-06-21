import { Component } from '@angular/core';
import { Product } from '../../util/product';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  produtosSelecionados: Product[] | undefined;

}
