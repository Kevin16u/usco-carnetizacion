import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdministrativoComponent } from "./administrativo/administrativo.component";
import { ComponentsComponent } from "./components.component";
import { DocenteComponent } from "./docente/docente.component";
import { GraduadoComponent } from "./graduado/graduado.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children:[
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'admin',
        component: AdministrativoComponent,
      },
      {
        path: 'docente',
        component: DocenteComponent,
      },
      {
        path: 'graduado',
        component: GraduadoComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
