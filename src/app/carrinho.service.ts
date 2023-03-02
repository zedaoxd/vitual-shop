import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obterCarrinho(): IProdutoCarrinho[] {
    const carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
      this.itens = JSON.parse(carrinho);
    }
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho): void {
    const itemCarrinho = this.itens.find((item) => item.id === produto.id);
    if (itemCarrinho) {
      itemCarrinho.quantidade += produto.quantidade;
    } else {
      this.itens.push(produto);
    }
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerDoCarrinho(produto: IProdutoCarrinho): void {
    const itemCarrinho = this.itens.find((item) => item.id === produto.id);
    if (itemCarrinho) {
      this.itens = this.itens.filter((item) => item.id !== produto.id);
    }
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  limparCarrinho(): void {
    this.itens = [];
    localStorage.removeItem('carrinho');
  }
}
