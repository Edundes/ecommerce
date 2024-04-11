import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Produto{
  codigo : number;
  nome : String;
  preco : number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
    
  private produtos: Produto[] = [];

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000';

  adicionarProduto(produto: Produto): Observable<any> {
    return this.http.post(`${this.apiUrl}`, produto);
  }

  obterProdutos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
