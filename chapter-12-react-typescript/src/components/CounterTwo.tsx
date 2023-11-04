import { ReactNode } from "react";

type CounterTwoProps = {
  setCount: React.Dispatch<React.SetStateAction<number | null>>;
  children: ReactNode;
};

const CounterTwo = ({ setCount, children }: CounterTwoProps) => {
  return (
    <div>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev) => (prev || 0) + 1)}>+</button>
      <button onClick={() => setCount((prev) => (prev || 0) - 1)}>-</button>
    </div>
  );
};

export default CounterTwo;
