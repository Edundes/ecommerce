import { Component } from '@angular/core';
import { CadastroDeProdutosComponent } from '../cadastro-de-produtos/cadastro-de-produtos.component';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';



@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CadastroDeProdutosComponent, ListaDeProdutosComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

}
