"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  initializeCount,
  selectCount,
} from "@/lib/features/counter/counterSlice";
import { AppDispatch, RootState } from "@/lib/store";

const CounterComponent: React.FC = () => {
  const count = useSelector((state: RootState) => selectCount(state));
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(initializeCount(10))}>
        Initialize to 10
      </button>
    </div>
  );
};

export default CounterComponent;
