import * as types from './types';

// INITIAL TIMER STATE
const initialState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

export default counterReducer;
