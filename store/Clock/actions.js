// ========================= ACTIONS
export const TICK_CLOCK = 'TICK_CLOCK';
export const START_CLOCK = 'START_CLOCK';
export const STOP_CLOCK = 'STOP_CLOCK';

// ========================= DISPATCHERS
let timer = null;
export const dispatchStartClock = () => ({ type: START_CLOCK, ts: Date.now() });

export const dispatchTickClock = () => (dispatch) => {
  timer = setInterval(
    () =>
      dispatch({
        type: TICK_CLOCK,
        ts: Date.now(),
      }),
    1000
  );
};

export const dispatchStopClock = () => (dispatch) => {
  dispatch({ type: STOP_CLOCK });
  clearInterval(timer);
};
