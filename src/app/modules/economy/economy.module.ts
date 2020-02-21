import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitIndexComponent } from './unit-index/unit-index.component';
import { MaterialModule } from 'src/app/core/material/material.module';




@NgModule({
  declarations: [
    UnitIndexComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UnitIndexComponent
  ]
})
export class EconomyModule { }
