import classes from './Counter.module.css';
import { increment, incrementBy5, decrement, toggle } from '../store/counter';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter); 
  const showCount = useSelector((state) => state.counter.showCount);

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const incrementBy5Handler = () => {
    dispatch(incrementBy5(5)); 
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCount && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
