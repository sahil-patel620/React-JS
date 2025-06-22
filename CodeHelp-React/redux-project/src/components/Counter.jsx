import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
    setAmount(0);
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleIncrementByAmount}>Increment by Amount</button>
    </div>
  );
};

export default Counter;
