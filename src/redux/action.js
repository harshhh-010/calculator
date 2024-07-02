export const SET_VALUE = 'SET_VALUE';
export const CLEAR_VALUE = 'CLEAR_VALUE';
export const DELETE_VALUE = 'DELETE_VALUE';
export const EVALUATE_VALUE = 'EVALUATE_VALUE';

export const setValue = (value) => ({
  type: SET_VALUE,
  payload: value,
});

export const clearValue = () => ({
  type: CLEAR_VALUE,
});

export const deleteValue = () => ({
  type: DELETE_VALUE,
});

export const evaluateValue = () => ({
  type: EVALUATE_VALUE,
});
