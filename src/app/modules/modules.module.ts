import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { FinancialComponent } from './components/financial/financial.component';
import { EconomyComponent } from './components/economy/economy.component';


@NgModule({
  declarations: [
    FinancialComponent,
    EconomyComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  exports: [
    FinancialComponent,
    EconomyComponent
  ]

})
export class ModulesModule { }
