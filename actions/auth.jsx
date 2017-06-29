import * as types from '../constants/Auth';

export function login(payload) {
  console.log(payload)

  return {
    type: types.LOGIN,
    user: payload.user,
    password: payload.password
  }
}

export function register(payload) {
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
