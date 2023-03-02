import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent {
  formContato = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    assunto: ['', [Validators.required, Validators.minLength(10)]],
    mensagem: ['', [Validators.required, Validators.minLength(20)]],
    telefone: ['', [Validators.required, Validators.minLength(11)]],
  });

  constructor(private fb: FormBuilder) {}

  enviarFormulario() {
    console.log(this.formContato.value);
    this.formContato.reset();
  }
}
