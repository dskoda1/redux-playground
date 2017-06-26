import * as types from '../constants/Auth';

export function login(user, password) {
  return {
    type: types.LOGIN,
    user,
    password
  }
}

export function register(user, password) {
  return {
    type: types.REGISTER,
    user,
    password
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}
