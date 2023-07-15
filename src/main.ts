import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.html',
  styleUrls: ['./global_styles.css'],
})
export class App {
  name = 'InterestsCalc';
}

bootstrapApplication(App);
