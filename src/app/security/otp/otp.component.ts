import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  constructor(
    public dialogRef: MatDialogRef<any>
  ){
  }


  closeDialog(){
    this.dialogRef.close()
  }

}
