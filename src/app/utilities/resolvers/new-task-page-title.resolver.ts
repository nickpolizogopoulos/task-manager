import { inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { UsersService } from '../../users/users.service';
import { Title } from '@angular/platform-browser';

export const newTaskPageTitleResolver: ResolveFn<string> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {

  const usersService = inject(UsersService);
  const title = inject(Title);

  const userName = usersService.users
    .find( user => user.id === activatedRouteSnapshot.paramMap.get('userId'))!.name;

  const pageTitle = title.setTitle(userName + ' - New task');

  return pageTitle!;
};