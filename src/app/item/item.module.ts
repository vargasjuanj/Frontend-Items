import { NgModule } from '@angular/core';

import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { ItemTablaComponent } from './item-tabla/item-tabla.component';


@NgModule({
  declarations: [ItemComponent, ItemTablaComponent],
  imports: [
    SharedModule,
    ItemRoutingModule,
  ]
})
export class ItemModule { }
