import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelTableComponent } from './parcel-table/parcel-table.component';
import { ParcelRoutingModule } from './parcel-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [
    ParcelTableComponent
  ],
  imports: [
    CommonModule,
    ParcelRoutingModule,
    MaterialModule
  ]
})
export class ParcelModule { }
