import { createStore } from "redux"; // pulling out the createStore method from redux
/**
 * There is also the createReducer
 * but createSlice is even more powerful than createReducer and it will simplify a couple of things in one go
 */
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// /**
//  * Notes:
//  *  we must always set the old states because we override the new old state
//  */
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     /**
//      * This is something that you should NEVER do!
//      * you should never mutate the existing state
//      * instead you have to always override it by returning a brand new state object
//      */
//     // state.counter++;
//     // return state;

//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

/**
 * the createStore method requires a reducer as an argument, and the redux store has to have only one reducer function
 * if we did it like this -> createStore(counterSlice.reducer), this will be a problem because if you have other slices it won't be a good fit
 * the solution is a method which gathers all the slices and puts them together in one reducer method, which is the configureStore method
 * the reducer property is required in this method, and its value is an object which contains multiple reducer slices which are then automatically combined by the configureStore method
 * NOTE: the slice reducer object key, is UP TO YOU TO RENAME IT -> here we used 'counter'
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  // reducer: counterSlice.reducer, // we used that here because we only have one slice
});

/**
 * this returns functions created automatically by the reducer toolkit which when called will create action objects for us
 * The returned action object has a type unique identifier for every action
 */
// counterSlice.actions.toggleCounter();

export default store;
