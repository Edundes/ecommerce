import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-de-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrl: './cadastro-de-produtos.component.css'
})
export class CadastroDeProdutosComponent {

nome = '';
preco = '';

adicionarProduto(){
  
}
}
