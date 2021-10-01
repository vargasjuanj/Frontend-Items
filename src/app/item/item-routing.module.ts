import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemTablaComponent } from './item-tabla/item-tabla.component';

const routes: Routes = [
  {path: '', component: ItemComponent},
  {path: 'tabla', component: ItemTablaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
