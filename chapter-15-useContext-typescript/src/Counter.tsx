import { ReactNode } from "react";
import { useCounter, useCounterText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();
  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input type="text" onChange={handleTextInput} />
      </div>
      <div>
        <h2>{text}</h2>
      </div>
    </>
  );
};

export default Counter;
