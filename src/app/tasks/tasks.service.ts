import { Injectable, signal } from '@angular/core';
import { dummy_tasks, type NewTaskData, type Task } from '../utilities/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks)
      this.tasks.set(JSON.parse(tasks));
  }

  private tasks = signal<Task[]>(dummy_tasks);

  private saveTasks() {
    const tasks = JSON.stringify(this.tasks());

    localStorage.setItem('tasks', tasks);
  }

  getUserTasks( userId:string ): Task[] {
    return this.tasks().filter( task => task.userId === userId );
  }

  addTask( task:NewTaskData, userId:string ) {
    this.tasks.update( tasks => [
      {
        //* not the best way to generate random IDs but works for now.
        id: new Date().getTime().toString(),
        userId: userId,
        title: task.title,
        summary: task.summary,
        dueDate: task.date
      },
      ...tasks
    ]);
    this.saveTasks();
  }

  removeTask( id:string ) {
    this.tasks.update( tasks => tasks.filter(task => task.id !== id) );
    this.saveTasks();
  }
  
}
