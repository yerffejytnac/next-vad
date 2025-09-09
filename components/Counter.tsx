"use client";

import { useShallow } from "zustand/react/shallow";
import { useStore } from "@/stores";

export const useCounter = () => {
  return useStore(
    useShallow((store) => ({
      count: store.count,
      increment: store.increment,
      decrement: store.decrement,
      reset: store.reset,
    })),
  );
};

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

Counter.displayName = "Counter";
