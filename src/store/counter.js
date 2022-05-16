import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

/**
 * The create slice is used to create only one related state, so here in our case the counter and the showCounter are counter related so we will use the name counter
 *  instead of using the action type way for changing the state, here we are creating an object key which again is an object that contains all the state manipulation methods
 * in those methods YOU CAN MUTATE THE STATE OBJECT, because when using the redux toolkit, you CAN'T accidently manipulate the existing state because redux toolkit internally uses another package called immer, which will detect any attempts of code to mutate the object,
 * and which will automatically clone the existing state, create a new state object, keep all the state which we are not editing, and override the state which we are editing in an immutable way
 *
 * The counter slice now will automatically create unique action identifiers so you can use them to dispatch actions
 * These methods are called action creators
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // every extra passed data is saved in a key with the name of payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
