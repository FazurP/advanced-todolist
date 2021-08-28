import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/app/globals';
import { Column } from 'src/app/models/column';
import { Task } from 'src/app/models/task';
import { DialogAddTaskComponent } from 'src/app/partial_views/dialog-add-task/dialog-add-task.component';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() columnName = ""
  @Input() columnId = ""
  tasks:Task[] = []
  private idcolumn:string=""

  constructor(public dialog: MatDialog,public globals:Globals) {
    
   }

  ngOnInit(): void {
   
  }

  openAddTaskDialog() {
   let ref = this.dialog.open(DialogAddTaskComponent,{
      data:{columnId:this.columnId}
    })

    const sub = ref.componentInstance.updateColumn.subscribe(data => {
      this.tasks = this.globals.tasks.filter(x => x.idColumn == data.idColumn)
      console.log(this.columnId)
    })

    ref.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  updateColumn(task:Task){
    console.log(task)
  }

}
