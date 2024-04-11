import { Routes } from '@angular/router';
import { CadastroDeProdutosComponent } from './cadastro-de-produtos/cadastro-de-produtos.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';



export const routes: Routes = [
{
    path: 'cadastro',
    component: CadastroDeProdutosComponent,
    title: 'Cadastro de Produtos'
},
{
    path: 'lista',
    component: ListaDeProdutosComponent,
    title: 'Lista de Produtos' 
},
{
    path: 'tela-inicial',
    component: ListaDeProdutosComponent,
    title: 'Tela Inicial' 
}

];
