import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path:'timer', loadChildren:'./timer/timer.module#TimerModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
