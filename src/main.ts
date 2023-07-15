import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { SimpleInterestsComponent } from './interests-simple/interests-simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AppModule,
    AppComponent,
    AppRoutingComponent,
    SimpleInterestsComponent,
    CompoundInterestsComponent,
    WelcomeComponent,
  ],
  templateUrl: './index.html',
  styleUrls: ['./global_styles.css'],
})
export class App {
  name = 'InterestsCalc';
}

bootstrapApplication(App);
