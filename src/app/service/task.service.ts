import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    let tasks = of(TASKS);
    return tasks;
  }
}
