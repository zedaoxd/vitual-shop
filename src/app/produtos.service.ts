import { Injectable } from '@angular/core';
import { IProduto, produtos as p } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  produtos: IProduto[] = p;

  constructor() {}

  getAll(): IProduto[] {
    return this.produtos;
  }

  getOne(id: number) {
    return this.produtos.find((p) => p.id === id);
  }
}
