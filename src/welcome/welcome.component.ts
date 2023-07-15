import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome/welcome.component.html',
  styleUrls: ['./welcome/welcome.component.css', './global_styles.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() name: string;
}
