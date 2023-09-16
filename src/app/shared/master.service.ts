import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserIsLoggedIn } from './store/user.selector';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    let isLoggedIn: boolean = false;
    inject(Store)
      .select(selectUserIsLoggedIn)
      .subscribe((loggedIn) => (isLoggedIn = loggedIn));
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
