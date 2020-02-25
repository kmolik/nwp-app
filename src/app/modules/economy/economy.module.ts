import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitIndexComponent } from './unit-index/unit-index.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ParcelComponent } from './parcel/parcel.component';
import { BuildingsComponent } from './buildings/buildings.component';




@NgModule({
  declarations: [
    UnitIndexComponent,
    ParcelComponent,
    BuildingsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UnitIndexComponent,
    ParcelComponent,
    BuildingsComponent
  ]
})
export class EconomyModule { }
