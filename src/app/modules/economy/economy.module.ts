import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomyRoutingModule } from './economy-routing.module';
import { BuildingsModule } from '../features/buildings/buildings.module';
import { ParcelModule } from '../features/parcel/parcel.module';
import { LegalStatusModule } from '../features/legal-status/legal-status.module';
import { EconomyDashboardComponent } from './components/economy-dashboard/economy-dashboard.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { SideMenuComponent } from 'src/app/core/side-menu/side-menu.component';


@NgModule({
  declarations: [EconomyDashboardComponent],
  imports: [
    CommonModule,
    EconomyRoutingModule,
    HeaderComponent,
    SideMenuComponent
  ]
})
export class EconomyModule { }
