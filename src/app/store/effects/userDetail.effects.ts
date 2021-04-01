import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import {
  loadUserDetail,
  loadUserDetailError,
  loadUserDetailSuccess,
} from '../actions';

@Injectable()
export class UserDetailEffects {
  constructor(private actions$: Actions, public userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetail),
      mergeMap((action) =>
        this.userService.getById(action.id).pipe(
          map((user) => loadUserDetailSuccess({ user })),
          catchError((error) => of(loadUserDetailError({ payload: error })))
        )
      )
    )
  );
}
