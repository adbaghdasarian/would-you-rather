
import {SET_AUTHED_USER, LOG_OUT_USER} from './types.js'

export function setAuthedUser (id) {

  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function logOutUser() {
  return{
    type: LOG_OUT_USER,
  }
}

