import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitIndexRoutingModule } from './unit-index-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UnitsTableComponent } from './unitsTable/unitsTable.component';



@NgModule({
  declarations: [
    UnitsTableComponent
  ],
  imports: [
    CommonModule,
    UnitIndexRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class UnitIndexModule { }