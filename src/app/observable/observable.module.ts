import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ContadorManualComponent } from './timer/contador-manual/contador-manual.component';
import { CuentaAtrasComponent } from './timer/cuenta-atras/cuenta-atras.component';
import { TimerComponent } from './timer/timer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TimerComponent, ContadorManualComponent, CuentaAtrasComponent ],
  imports: [
    SharedModule,
    ObservableRoutingModule
  ],
  exports: [
    CuentaAtrasComponent
  ]
})
export class ObservableModule { }
