import { Component, OnInit } from '@angular/core';
import { Produto, ProdutoService } from '../produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = { codigo: 0, nome: '', preco: 0 }; // Novo produto a ser adicionado

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.obterProdutos();
    this.adicionarProduto();
  }

  obterProdutos() {
    this.produtoService.obterProdutos().subscribe({
      next: (produtos: Produto[]) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        console.error('Erro ao obter produtos:', erro);
      }
    });
  }

  adicionarProduto() {
    if (this.novoProduto.nome && this.novoProduto.preco) {
      this.produtoService.adicionarProduto(this.novoProduto).subscribe({
        next: (resposta) => {
          console.log('Produto adicionado com sucesso:', resposta);
          this.obterProdutos();
          this.novoProduto = { codigo: 0, nome: '', preco: 0 };
        },
        error: (erro) => {
          console.error('Erro ao adicionar produto:', erro);
        }
      });
    } else {
      console.error('Por favor, preencha todos os campos do novo produto.');
    }
  }
}
