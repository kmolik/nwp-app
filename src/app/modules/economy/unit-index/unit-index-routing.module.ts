import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsTableComponent } from './unitsTable/unitsTable.component';


const routes: Routes = [
  {path: 'unitTable', component: UnitsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitIndexRoutingModule { }
