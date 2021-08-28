import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Column } from './models/column';

@Injectable()
export class Globals {
    tasks:Task[] = [ ]
    columns:Column[] = []
}