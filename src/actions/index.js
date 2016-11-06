import {
  CHANGE_AUTH
} from './types';

// This action passes along the value (T/F) simply
export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
