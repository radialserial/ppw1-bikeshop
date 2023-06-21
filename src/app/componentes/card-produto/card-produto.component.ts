import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/util/product';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {

  @Input()
  produto!: Product;
  @Output() enviar: EventEmitter<any> = new EventEmitter();

  ligada: boolean = false;

  update() {
    if (this.ligada) {
      this.enviar.emit(this.produto.id);
    }
  }
}
