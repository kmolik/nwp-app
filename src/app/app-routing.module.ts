import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';


const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'economy',
        loadChildren: () => import('./modules/economy/economy.module').then(m => m.EconomyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
