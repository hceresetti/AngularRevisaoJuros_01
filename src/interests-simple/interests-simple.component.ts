import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests-simple',
  templateUrl: './interests-simple.component.html',
  styleUrls: ['./interests-simple.component.css'],
})
export class SimpleInterestsComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() {
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {}

  getInterests() {
    return this.vp * (1 + (this.j / 100) * this.n);
  }
}
