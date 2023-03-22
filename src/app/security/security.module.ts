import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { OtpComponent } from "./otp/otp.component";
import { SecurityRoutingModule } from "./security-routing.module";
import { SecurityComponent } from "./security.component";
import { SignInComponent } from "./sign-in/sign-in.component";



@NgModule({
  declarations: [
    SecurityComponent,
    SignInComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class SecurityModule { }
