import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './question1/question1.component';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { C1Component } from './question4/c1/c1.component';
import { C2Component } from './question4/c2/c2.component';
import { C3Component } from './question4/c3/c3.component';
import { C4Component } from './question4/c4/c4.component';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question3Component,
    Question4Component,
    C1Component,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
