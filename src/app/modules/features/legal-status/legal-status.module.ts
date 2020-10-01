import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalStatusTableComponent } from './legal-status-table/legal-status-table.component';
import { LegalStatusRoutingModule } from './legal-status-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { LegalStatusFormComponent } from './legal-status-form/legal-status-form.component';


@NgModule({
  declarations: [
    LegalStatusTableComponent,
    LegalStatusFormComponent
  ],
    imports: [
        CommonModule,
        LegalStatusRoutingModule,
        MaterialModule
    ]
})
export class LegalStatusModule { }
