import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NotFoundComponent } from './not-found.component';
import { userResolver } from './utilities/resolvers/user-name.resolver';
import { pageTitleResolver } from './utilities/resolvers/tasks-page-title.resolver';
import { newTaskPageTitleResolver } from './utilities/resolvers/new-task-page-title.resolver';
import { canLeaveFormPageGuard } from './utilities/guards/can-leave-form-page.guard';

export const routes: Routes = 
[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users/:userId',
        component: TasksComponent,

        resolve: {
            user: userResolver,
            pageTitle: pageTitleResolver,
        }
    },
    {
        path: 'users/:userId/new-task',
        component: NewTaskComponent,
        canDeactivate: [canLeaveFormPageGuard],
        resolve: {
            user: userResolver,
            pageTitle: newTaskPageTitleResolver
        }
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
