import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingsTableComponent } from './buildings-table/buildings-table.component';
import { BuildingsFormModalComponent } from './buildings-form-modal/buildings-form-modal.component';


const routes: Routes = [
  {path: 'buildingsTable', component: BuildingsTableComponent},
  {path: 'modal', component: BuildingsFormModalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingsRoutingModule { }
