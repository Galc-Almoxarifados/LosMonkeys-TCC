import { Component } from '@angular/core';
import { Pedido } from './pedido.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
    pedido: Pedido = {
      professor: '',
      materiais: ''
    };
  
  

  submitPedido(): void {
    // Aqui você pode implementar a lógica para enviar o pedido para algum serviço ou API
    console.log(this.pedido);
  }
}
