import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, public userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getAll().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUsersError({ payload: error })))
        )
      )
    )
  );
}
