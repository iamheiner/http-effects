import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { loadUserDetail } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  user: User;
  loading: boolean = false;
  error: any;
  userSuscription: Subscription;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.userSuscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.userSuscription = this.store
      .select('userDetail')
      .subscribe(({ user, loading, error }) => {
        this.user = user;
        this.loading = loading;
        this.error = error;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUserDetail({ id }));
    });
  }
}
