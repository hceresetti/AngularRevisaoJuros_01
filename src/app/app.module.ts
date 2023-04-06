import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../app/app.component';
import { RootComponent } from '../root/root.component';
import { JurosSimplesComponent } from '../juros-simples/juros-simples.component';
import { JurosCompostosComponent } from '../juros-compostos/juros-compostos.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: ' ', component: RootComponent },
      { path: 'juros-simples', component: JurosSimplesComponent },
      { path: 'juros-compostos', component: JurosCompostosComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    RootComponent,
    JurosSimplesComponent,
    JurosCompostosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
