import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { EconomyRoutingModule } from './economy-routing.module';





@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EconomyRoutingModule
  ],
  exports: [
    MaterialModule
  ]
})
export class EconomyModule { }
