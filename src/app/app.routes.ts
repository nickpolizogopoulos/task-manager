import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

export const routes: Routes = 
[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users/:userId',
        component: TasksComponent,
    },
    {
        path: 'users/:userId/new-task',
        component: NewTaskComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
