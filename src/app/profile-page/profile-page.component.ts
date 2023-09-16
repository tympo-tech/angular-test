import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserEmail } from '../shared/store/user.selector';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  userEmail: string | null;

  constructor(private store: Store) {
    this.userEmail = null;
  }

  ngOnInit(): void {
    this.store.select(selectUserEmail).subscribe((email) => {
      this.userEmail = email;
    });
  }
}
