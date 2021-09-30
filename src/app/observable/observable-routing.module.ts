import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorManualComponent } from './timer/contador-manual/contador-manual.component';
import { CuentaAtrasComponent } from './timer/cuenta-atras/cuenta-atras.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [

  {
    path: '',
    component: TimerComponent,
    children: [
      { path: '', component: ContadorManualComponent }
      // { path: 'atras', component: CuentaAtrasComponent }
    ]

  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ObservableRoutingModule { }
