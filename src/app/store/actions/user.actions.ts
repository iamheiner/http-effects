import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[User List] loadUsers');
export const loadUsersSuccess = createAction(
  '[User List] loadUsersSuccess',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction(
  '[User List] loadUsersError',
  props<{ payload: any }>()
);
