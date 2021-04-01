import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUserDetail = createAction(
  '[User Detail] loadUserDetail',
  props<{ id: string }>()
);
export const loadUserDetailSuccess = createAction(
  '[User Detail] loadUserDetailSuccess',
  props<{ user: User }>()
);
export const loadUserDetailError = createAction(
  '[User Detail] loadUserDetailError',
  props<{ payload: any }>()
);
