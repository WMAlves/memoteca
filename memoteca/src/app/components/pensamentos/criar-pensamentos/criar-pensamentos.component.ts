import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento = {
    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1'

  }

  criarPensamento(){
    alert("Novo Pensamento Criado");
  }

  cancelarPensamento(){

  }
}
