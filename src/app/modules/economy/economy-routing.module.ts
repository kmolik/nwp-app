import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'unit-index',
    loadChildren: () => import('./unit-index/unit-index.module').then(m => m.UnitIndexModule)
  },
  {
    path: 'parcel',
    loadChildren: () => import('./parcel/parcel.module').then(m => m.ParcelModule)
  },
  {
    path: 'buildings',
    loadChildren: () => import('./buildings/buildings.module').then(m => m.BuildingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomyRoutingModule { }
