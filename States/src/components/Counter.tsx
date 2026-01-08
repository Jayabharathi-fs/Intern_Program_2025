import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store.ts";
import {increment, decrement, incrementByAmount, decrementByAmount, incrementAsync} from '../state/counter/counterSlice.ts';

const Counter = () => {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h3>Counter Value: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount({value: 10}))}>Increment by 10</button>
      <button onClick={() => dispatch(decrementByAmount({value: 10}))}>Decrement by 10</button>
      <button onClick={() => dispatch(incrementAsync(10))}>Increment Async</button>
    </div>
  );
};

export default Counter;