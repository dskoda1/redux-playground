
import * as types from '../constants/Auth'

const initialState = {
  loggedIn: false,
  user: ''
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        loggedIn: true,
        user: action.user
      }
    case types.REGISTER:
      return {
        loggedIn: true,
        user: action.user
      }
    case types.LOGOUT:
      return initialState
    default:
      return state
  }
}
