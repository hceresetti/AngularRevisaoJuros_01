import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'App' + VERSION.major;

  constructor() {}

  OnInit() {}
}
