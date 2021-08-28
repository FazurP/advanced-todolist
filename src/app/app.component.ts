import { Component } from '@angular/core';
import { Globals } from './globals';
import { Column } from './models/column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columns:Column[]

  constructor(globals:Globals){
    this.columns = globals.columns
  }
  title = 'advanced-todo-list';

  
}
