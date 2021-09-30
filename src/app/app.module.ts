import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReversedPipe } from './reversed.pipe';
import { ObservableModule } from './observable/observable.module';
@NgModule({
  declarations: [
    AppComponent,
    ReversedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ObservableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
