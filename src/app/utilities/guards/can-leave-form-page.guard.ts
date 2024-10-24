import { CanDeactivateFn } from '@angular/router';

import { NewTaskComponent } from '../../tasks/new-task/new-task.component';

export const canLeaveFormPageGuard: CanDeactivateFn<NewTaskComponent> = (component) => {

  const title: string = component.title();
  const summary: string = component.summary();
  const date: string = component.date();
  
  const submitted = component.submitted();

  if (submitted)
    return true;

  if (title || summary || date)  
      return window.confirm('Do you really want to close the form? All your entered information will be lost!');
  
  return true;
    
};
