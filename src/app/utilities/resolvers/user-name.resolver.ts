import { inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { UsersService } from '../../users/users.service';
import { type User } from '../tools/users';


export const userResolver: ResolveFn<User> = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {

  const usersService = inject(UsersService);

  const user = usersService.users
    .find( user => user.id === activatedRouteSnapshot.paramMap.get('userId'));

  return user!;
};