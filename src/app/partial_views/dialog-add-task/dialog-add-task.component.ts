import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnComponent } from 'src/app/components/column/column.component';
import { Globals } from 'src/app/globals';
import { Column } from 'src/app/models/column';
import { Task } from 'src/app/models/task';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.css']
})
export class DialogAddTaskComponent implements OnInit {

  columns:Column[]
  task:Task = new Task
  taskG:Task[]
  @Output() updateColumn: EventEmitter<Task> = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<ColumnComponent>,@Inject(MAT_DIALOG_DATA) public data: any,globals: Globals) {
    this.columns = globals.columns
    this.taskG = globals.tasks
   }

  ngOnInit(): void {

  }

  onNoClick(): void {
  
    this.dialogRef.close();
  }

  onSaveTask(){
    this.task.id = uuidv4()
    this.task.idColumn = this.data.columnId
    this.taskG.push(this.task)
    this.updateColumn.emit(this.task)
    this.task = new Task
    //this.columns = this.columns.filter(x => x.id == this.data.columnId)
    //this.columns.map(x => x.tasks.push(this.task))
  }
 

}
