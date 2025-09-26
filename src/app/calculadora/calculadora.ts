import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class CalculadoraComponent {

  // Variavel para o display
  resultado_tela: any = '0';
  valor_um: number = 0;
  valor_dois: number = 0;
  operador: any = null;

  // este metodo lida com os numeros
  lidarComNumeros(numero: any) {
    if(this.resultado_tela === '0') {
      this.resultado_tela = numero.toString();
    } else {
      this.resultado_tela += numero.toString();
    }
  }

  // lida com os operadores
  lidarComOperadores(op: string){
    this.valor_um = parseFloat(this.resultado_tela);
    this.operador = op;
    this.resultado_tela = '0';
  }

  // Funcao para calcular o resultado
  calcularResultado() {
    this.valor_dois = parseFloat(this.resultado_tela);
    let result: number = 0;

    // um switch para as operacoes
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
          // Divisao por zero e um problema
          this.resultado_tela = "Erro!";
          return;
        }
        result = this.valor_um / this.valor_dois;
        break;
    }

    this.resultado_tela = result.toString();
    // Reseta as variaveis globais
    this.valor_um = 0;
    this.valor_dois = 0;
    this.operador = null;
  }

  // Metodo para limpa a tela
  limpaTudo() {
    this.resultado_tela = '0';
    this.valor_um = 0;
    this.valor_dois = 0;
    this.operador = null;
  }
}
