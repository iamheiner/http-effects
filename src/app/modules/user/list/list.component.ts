import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  error: any;
  users: User[] = [];
  userSuscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.userSuscription?.unsubscribe();
  }

  ngOnInit() {
    this.userSuscription = this.store
      .select('users')
      .subscribe(({ users, loading, error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      });

    this.store.dispatch(loadUsers());
  }
}
