import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
    //RouterModule  //Para el [routerLink] dinamico
  ],
  exports:[
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
