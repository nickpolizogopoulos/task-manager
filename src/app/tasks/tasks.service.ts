import { 
  Injectable,
  Signal,
  signal
} from '@angular/core';

import {
  dummy_tasks,
  type NewTaskData,
  type Task
} from '../utilities/tasks';

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
  getTasks: Signal<Task[]> = this.tasks.asReadonly();

  private saveTasks(): void {
    const tasks = JSON.stringify(this.tasks());

    localStorage.setItem(this.localStorageItem, tasks);
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
