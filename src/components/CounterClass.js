import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

class CounterClass extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

/**
 * The mapStateToProps function takes the redux state as a parameter and returns an object which the keys are available as props in that component,
 * and the values are the drilling into the redux state
 */
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

/**
 * The mapDispatchToProps function takes the dispatch function as a parameter and returns an object that has the keys also as prop names and the value,
 * is another function which we call dispatch and then set up our action
 */
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

/**
 * Here the connect function is getting excecuted, and then it returns a value which is another function that we also excecute and pass the CounterClass as a parameter to it
 * The connect method takes 2 parameters which are also other functions
 *    fisrt function is a function that maps redux state to props which are going to be received in this component (naming convention: mapStateToProps)
 */
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
