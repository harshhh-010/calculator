import { SET_VALUE, CLEAR_VALUE, DELETE_VALUE, EVALUATE_VALUE } from './action';

const initialState = {
  value: '',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case CLEAR_VALUE:
      return {
        ...state,
        value: '',
      };
    case DELETE_VALUE:
      return {
        ...state,
        value: state.value.slice(0, -1),
      };
    case EVALUATE_VALUE:
      try {
        return {
          ...state,
          value: eval(state.value).toString(),
        };
      } catch (error) {
        return {
          ...state,
          value: 'Error',
        };
      }
    default:
      return state;
  }
};

export default calculatorReducer;
