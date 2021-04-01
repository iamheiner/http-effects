import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import {
  loadUserDetail,
  loadUserDetailError,
  loadUserDetailSuccess,
} from '../actions';

export interface UserDetailState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialUserDetailState: UserDetailState = {
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _userDetailReducer = createReducer(
  initialUserDetailState,
  on(loadUserDetail, (state, { id }) => ({ ...state, loading: true, id: id })),
  on(loadUserDetailSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
  })),
  on(loadUserDetailError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function userDetailReducer(state, action) {
  return _userDetailReducer(state, action);
}
