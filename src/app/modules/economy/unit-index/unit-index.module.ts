import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitIndexRoutingModule } from './unit-index-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UnitsTableComponent } from './unitsTable/unitsTable.component';
import { DbSelectComponent } from './db-select/db-select.component';



@NgModule({
  declarations: [
    UnitsTableComponent,
    DbSelectComponent
  ],
  imports: [
    CommonModule,
    UnitIndexRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [
    DbSelectComponent
  ]
})
export class UnitIndexModule { }
