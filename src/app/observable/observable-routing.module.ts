import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorManualComponent } from './contador-manual/contador-manual.component';
import { CuentaAtrasComponent } from './cuenta-atras/cuenta-atras.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ContadorManualComponent }
      // { path: 'atras', component: CuentaAtrasComponent },
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ObservableRoutingModule { }
