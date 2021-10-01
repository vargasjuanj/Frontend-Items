import { NgModule } from '@angular/core';

import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    SharedModule,
    ItemRoutingModule,
  ]
})
export class ItemModule { }
