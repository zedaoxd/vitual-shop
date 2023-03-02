import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ContatoComponent],
  imports: [CommonModule, ContatoRoutingModule, ReactiveFormsModule],
})
export class ContatoModule {}
