import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReversedPipe } from './reversed.pipe';
import { TimerModule } from './timer/timer.module';
import { CuentaAtrasComponent } from './cuenta-atras/cuenta-atras.component';
@NgModule({
  declarations: [
    AppComponent,
    ReversedPipe,
    CuentaAtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TimerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
