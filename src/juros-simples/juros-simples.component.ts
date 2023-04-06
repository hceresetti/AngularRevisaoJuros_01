import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
})
export class JurosSimplesComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() {
    this.vp = 100; // capital
    this.j = 2.5; // taxa de juros
    this.n = 3; // período
  }

  ngOnInit() {}
  getJuros() {
    return this.vp * (1 + (this.j / 100) * this.n); //colocar a formula dentro do for para preencher a tabela
  }
}
