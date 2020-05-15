import * as types from './types';

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = (isServer) => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: !isServer, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);
