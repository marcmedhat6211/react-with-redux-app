import { createStore } from "redux"; // pulling out the createStore method from redux

const initialState = {
  counter: 0,
  showCounter: true,
};

/**
 * Notes:
 *  we must always set the old states because we override the new old state
 */
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    /**
     * This is something that you should NEVER do!
     * you should never mutate the existing state
     * instead you have to always override it by returning a brand new state object
     */
    // state.counter++;
    // return state;

    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
