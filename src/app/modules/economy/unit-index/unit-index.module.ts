import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UnitIndexRoutingModule } from './unit-index-routing.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    UnitIndexRoutingModule
  ]
})
export class UnitIndexModule { }
