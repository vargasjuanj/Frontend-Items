import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
    //RouterModule  //Para el [routerLink] dinamico
  ],
  exports:[
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
