import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.itensCarrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  }

  removerDoCarrinho(produto: IProdutoCarrinho): void {
    this.carrinhoService.removerDoCarrinho(produto);
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  finalizarCompra(): void {
    alert('Compra finalizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/produtos']);
  }
}
