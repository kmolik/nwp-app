import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './unitsTable/unitsTable.component';


const routes: Routes = [
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitIndexRoutingModule { }
