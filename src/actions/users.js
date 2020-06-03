import { RECEIVE_USERS } from './types.js';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }

}

