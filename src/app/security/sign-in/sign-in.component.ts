import { Component } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm!: UntypedFormGroup;
  hide: boolean = true;
  isLoggedIn: boolean = true;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
  ){}


  ngOnInit(): void {
    this.signInForm = new UntypedFormGroup({
      document: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
    });
  }

  modal(){
    const dialogRef = this.dialog.open(OtpComponent, {
      width: '1200px',
      maxWidth: '1200px'
    })

  }



}
