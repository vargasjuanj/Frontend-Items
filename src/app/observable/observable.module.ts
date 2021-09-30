import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaAtrasComponent } from './cuenta-atras/cuenta-atras.component';
import { ObservableRoutingModule } from './observable-routing.module';
import { ContadorManualComponent } from './contador-manual/contador-manual.component';


@NgModule({
  declarations: [ContadorManualComponent, CuentaAtrasComponent],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  exports: [
    CuentaAtrasComponent
  ]
})
export class ObservableModule { }
