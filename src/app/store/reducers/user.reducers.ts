import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

export interface UserState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: null;
}

export const initialState: UserState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
