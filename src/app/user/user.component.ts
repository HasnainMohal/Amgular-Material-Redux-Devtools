import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ModelComponent,{
      width: '100%',
    });
  }
}
