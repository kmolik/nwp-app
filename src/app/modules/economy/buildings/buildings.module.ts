import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsTableComponent } from './buildings-table/buildings-table.component';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [
    BuildingsTableComponent
  ],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    MaterialModule
  ]
})
export class BuildingsModule { }
