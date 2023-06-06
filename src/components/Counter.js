import { useSelector , useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const dispath = useDispatch();
  const counter = useSelector(state => state.counter)


  const incrementHandler = () => {
    dispath({type:'increment'})
  }

  const decrementHandler =() => {
    dispath({type : 'decrement'})
  }
  


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
