import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

// fibonoci means sum of previous two numbers, base 0 and 1
// 0 1 1 2 3 5 8

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 4;

function App() {
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  const [users, setUsers] = useState<User[] | null>(null);
  const [count, setCount] = useState<number>(0);
  const [test, setTest] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log("inputRef?.current", inputRef?.current);
  console.log("inputRef?.current?.value", inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users", users);
    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      // setCount(count + 1);
      setCount((prev) => prev + 1);
    },
    []
  );

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={addTwo}>Add</button>
        <h2>{result}</h2>
        <input ref={inputRef} type="text" />
        <button onClick={() => setTest(!test)}>Toggle</button>
      </div>
    </>
  );
}

export default App;
