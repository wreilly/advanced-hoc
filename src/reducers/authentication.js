import {
  CHANGE_AUTH
} from '../actions/types';

// This reducer simply passes along the payload value as received (T/F)
export default function (state = false, action) {
    switch (action.type) {
      case CHANGE_AUTH:
        return action.payload;
    }
    return state;
}
