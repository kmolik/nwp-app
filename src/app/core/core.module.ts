import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UnitIndexService } from './http/unit_index.service';
import { MaterialModule } from './material/material.module';
import { ParcelService } from './http/parcel.service';
import { BuildingsService } from './http/buildings.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    MaterialModule
  ],
  providers: [
    UnitIndexService,
    ParcelService,
    BuildingsService
  ]
})
export class CoreModule { }
