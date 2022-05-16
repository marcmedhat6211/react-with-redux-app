/**
 * If we are using class based components, we can use the connect method instead of the useSelector hook
 */
import { useSelector, useDispatch } from "react-redux"; // we can use the useStore hook but it is more convenient to use useSelector because it gives us the ability to "select" what you want from the store
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  /**
   * useDispatch is another hook to dispatch actions
   * it returns a function
   */
  const dispatch = useDispatch();
  /**
   * This argument function in useSelector hook is a function that takes the state managed by redux as a parameter
   * that's how you extract one piece of data from the store
   * when you use useSelector, react redux will automatically sets a subscription to the redux store for this component
   *  so the component will get updated and will receive the latest counter automatically whenever that data changes
   * if you unmount this DOM component from the DOM tree, react redux will automatically clear the subscription for you
   */
  // const counter = useSelector((state) => state.counter); // this is used if you only have one slide at the redux store
  const counter = useSelector((state) => state.counter.counter); // this is used when you are using multiple slices in the redux store, the first counter is the key you used in the configureStore reducer object and the second counter is the counter in the counter's state

  // const showCounter = useSelector((state) => state.showCounter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment()); // as said before, returns a full object which has the type property
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
