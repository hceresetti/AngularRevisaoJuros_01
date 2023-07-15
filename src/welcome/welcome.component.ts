import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-app',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor() {}

  ngOnInit() {}

  @Input() name: string;
}
