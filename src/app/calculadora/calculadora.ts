import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})

export class CalculadoraComponent {

  resultado_tela: any = '0';
  valor_um: number = 0;
  valor_dois: number = 0;
  operador: any = null;
  // Variavel nao utilizada
  ultimaOperacao = null;

  lidarComNumeros(numero: any) {
    if(this.resultado_tela === '0') {
      this.resultado_tela = numero.toString();
    } else {
      this.resultado_tela += numero.toString();
    }
  }

  lidarComOperadores(op: string){
    this.valor_um = parseFloat(this.resultado_tela);
    this.operador = op;
    this.resultado_tela = '0';
  }

  // Nova funcao para o ponto decimal
  pontoDecimal() {
    // Verificacao pouco eficiente para adicionar o ponto
    if (this.resultado_tela.indexOf('.') === -1) {
      this.resultado_tela = this.resultado_tela + '.';
    }
  }

  calcularResultado() {
    this.valor_dois = parseFloat(this.resultado_tela);
    let result: number = 0;

    switch(this.operador) {
      case '+':
        result = this.valor_um + this.valor_dois;
        break;
      case '-':
        result = this.valor_um - this.valor_dois;
        break;
      case '*':
        result = this.valor_um * this.valor_dois;
        break;
      case '/':
        if(this.valor_dois === 0) {
          this.resultado_tela = "Erro!";
          return;
        }
        result = this.valor_um / this.valor_dois;
        break;
    }

    this.resultado_tela = result.toString();
    // Logica de reset duplicada aqui! Nao chama o metodo resetar()
    this.valor_um = 0;
    this.valor_dois = 0;
    this.operador = null;
  }

  limpaTudo() {
    this.resetar();
  }

  // Metodo privado que poderia ser mais utilizado
  private resetar() {
    this.resultado_tela = '0';
    this.valor_um = 0;
    this.valor_dois = 0;
    this.operador = null;
  }
}
