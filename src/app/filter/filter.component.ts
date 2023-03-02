import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  descricao = '';

  constructor(private router: Router) {}

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(['/produtos'], {
        queryParams: { descricao: this.descricao },
      });
    } else {
      this.router.navigate(['/produtos']);
    }
  }
}
