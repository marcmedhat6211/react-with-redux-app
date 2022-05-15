/**
 * If we are using class based components, we can use the connect method instead of the useSelector hook
 */
import { useSelector, useDispatch } from "react-redux"; // we can use the useStore hook but it is more convenient to use useSelector because it gives us the ability to "select" what you want from the store

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
  const counter = useSelector((state) => state.counter);

  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
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