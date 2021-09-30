import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ContadorManualComponent } from './timer/contador-manual/contador-manual.component';
import { CuentaAtrasComponent } from './timer/cuenta-atras/cuenta-atras.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [TimerComponent, ContadorManualComponent, CuentaAtrasComponent ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  exports: [
    CuentaAtrasComponent
  ]
})
export class ObservableModule { }
