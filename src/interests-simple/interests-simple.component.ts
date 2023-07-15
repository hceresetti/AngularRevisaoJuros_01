import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests-simple',
  templateUrl: './app-interests-simple.component.html',
  styleUrls: ['./app-interests-simple.component.css'],
})
export class SimpleInterestsComponent implements OnInit {
  capital: number;
  interestsTax: number;
  periodsAmount: number;

  constructor() {
    this.capital = 100; // capital
    this.interestsTax = 2.5; // tax of interests
    this.periodsAmount = 3; // amount of periods
  }

  ngOnInit() {}

  getInterests() {
    return this.capital * (1 + (this.interestsTax / 100) * this.periodsAmount); // put an equation into the for loop to fill a table
  }
}
