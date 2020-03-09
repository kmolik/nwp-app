import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsTableComponent } from './buildings-table/buildings-table.component';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { BuildingsFormComponent } from './buildings-form/buildings-form.component';
import { BuildingsFormModalComponent, DialogOverviewExampleDialog } from './buildings-form-modal/buildings-form-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuildingsTableComponent,
    BuildingsFormComponent,
    BuildingsFormModalComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    BuildingsFormModalComponent,
    DialogOverviewExampleDialog
  ]
})
export class BuildingsModule { }
