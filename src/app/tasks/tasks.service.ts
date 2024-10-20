import { Injectable, signal } from '@angular/core';

import { dummy_tasks, type NewTaskData, type Task } from '../utilities/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private localStorageItem: string = 'nick-polizogopoulos-easy-task-manager-web-application';

  constructor() {
    const tasks = localStorage.getItem(this.localStorageItem);

    if (tasks)
      this.tasks.set(JSON.parse(tasks));
  }

  private tasks = signal<Task[]>(dummy_tasks);

  private saveTasks(): void {
    const tasks = JSON.stringify(this.tasks());

    localStorage.setItem(this.localStorageItem, tasks);
  }

  getUserTasks( userId: string ): Task[] {
    return this.tasks().filter(
      task => task.userId === userId
    );
  }

  addTask( task: NewTaskData, userId: string ): void {
    this.tasks.update( 
      tasks => [
        {
          id: crypto.randomUUID(),
          userId: userId,
          title: task.title,
          summary: task.summary,
          dueDate: task.date
        },
        ...tasks
      ]
    );

    this.saveTasks();
  }

  removeTask( id: string ): void {
    this.tasks.update( 
      tasks => tasks.filter(
        task => task.id !== id
      )
    );

    this.saveTasks();
  }
  
}
