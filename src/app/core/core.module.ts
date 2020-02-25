import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UnitIndexService } from './http/unit_index.service';
import { MaterialModule } from './material/material.module';
import { ParcelService } from './http/parcel.service';
import { BuildingsService } from './http/buildings.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule
  ],
  providers: [
    UnitIndexService,
    ParcelService,
    BuildingsService
  ]
})
export class CoreModule { }
