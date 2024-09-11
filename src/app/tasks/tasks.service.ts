import { Injectable } from '@angular/core';
import { dummy_tasks, type NewTaskData, type Task } from '../utilities/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    const tasks = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasks);
  }

  getUserTasks( userId:string ):Task[] {
    return this.tasks.filter( task => task.userId === userId );
  }

  addTask( task:NewTaskData, userId:string  ) {
    this.tasks.unshift(
      {
        id: new Date().getTime().toString(), //* not so good way for generating random IDs but works for now.
        userId: userId,
        title: task.title,
        summary: task.summary,
        dueDate: task.date
      }
    );
    this.saveTasks();
  }

  removeTask( id:string ) {
    const task = this.tasks.find( task => task.id === id )!;
    const index = this.tasks.indexOf(task);

    this.tasks.splice(index, 1);

    //* Max does it like this:
    //* this will create a new array with the method parameter excluded.
    //* this.tasks.filter( task => task.id !== id );

    this.saveTasks();
  }

  private tasks:Task[] = dummy_tasks;
}
