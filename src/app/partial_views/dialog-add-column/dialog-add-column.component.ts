import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { Globals } from 'src/app/globals';
import { Column } from 'src/app/models/column';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-dialog-add-column',
  templateUrl: './dialog-add-column.component.html',
  styleUrls: ['./dialog-add-column.component.css']
})
export class DialogAddColumnComponent implements OnInit {

  columns:Column[]

  constructor( public dialogRef: MatDialogRef<ToolbarComponent>,globals: Globals) {
    this.columns = globals.columns
   }

  column:Column = new Column()

  ngOnInit(): void {
  }

  onSaveColumn(){
    this.column.id = uuidv4()
    this.columns.push(this.column)
    this.column = new Column()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
