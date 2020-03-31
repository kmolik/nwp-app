import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'parcel',
    loadChildren: () => import('./modules/economy/parcel/parcel.module').then(m => m.ParcelModule)
  },
  {
    path: 'buildings',
    loadChildren: () => import('./modules/economy/buildings/buildings.module').then(m => m.BuildingsModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./modules/economy/legal-status/legal-status.module').then(m => m.LegalStatusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
