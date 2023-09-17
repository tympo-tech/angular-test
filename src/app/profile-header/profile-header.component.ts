import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserActions from '../shared/store/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
})
export class ProfileHeaderComponent {
  constructor(private store: Store, private router: Router) {}

  onLogoutClick(): void {
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/login']);
  }
}
