import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UnitIndexRoutingModule } from './unit-index-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    UnitIndexRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class UnitIndexModule { }
