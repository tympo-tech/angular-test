import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserIsLoggedIn } from './shared/store/user.selector';
import { MasterService } from './shared/master.service';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(MasterService).isLoggedIn();
};
