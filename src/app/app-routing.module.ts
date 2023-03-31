import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then((m) => m.SecurityModule),
  },
  {
    path: 'components',
    loadChildren: () => import('./components/component.module').then((m) => m.ComponentsModule),
  },
  {
    path:'**',
    redirectTo:'security/sign-in'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
