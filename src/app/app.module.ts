import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { InterestsSimpleComponent } from './interests-simple/interests-simple.component';
import { InterestsCompoundComponent } from './interests-compound/interests-compound.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppRoutingComponent },
      { path: 'interests-simple', component: InterestsSimpleComponent },
      { path: 'interests-compound', component: InterestsCompoundComponent },
    ]),
    AppComponent,
    WelcomeComponent,
    AppRoutingComponent,
    InterestsSimpleComponent,
    InterestsCompoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
