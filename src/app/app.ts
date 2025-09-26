import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora'; // Importe aqui


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, CalculadoraComponent],
  template: `
    <app-calculadora></app-calculadora>
  `,
  styleUrl: './app.css'
})
export class App {
  title = 'meu-projeto-teste';
}
