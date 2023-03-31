import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { ComponentRoutingModule } from "./component-routing.module";
import { ComponentsComponent } from "./components.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProgressBarComponent } from "./shared/progress-bar/progress-bar.component";
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { DocenteComponent } from './docente/docente.component';
import { GraduadoComponent } from './graduado/graduado.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    ProgressBarComponent,
    ProfileComponent,
    AdministrativoComponent,
    DocenteComponent,
    GraduadoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComponentRoutingModule
  ]
})

export class ComponentsModule{}
