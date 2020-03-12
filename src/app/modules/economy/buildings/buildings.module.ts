import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsTableComponent } from './buildings-table/buildings-table.component';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { BuildingsFormComponent } from './buildings-form/buildings-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuildingsTableComponent,
    BuildingsFormComponent
  ],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    BuildingsFormComponent
  ]
})
export class BuildingsModule { }
