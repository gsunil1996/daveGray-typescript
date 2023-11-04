import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import Heading from "./components/Heading";
import List from "./components/List";
import Section from "./components/Section";
import { useState } from "react";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState<number | null>(1);

  return (
    <>
      <Heading title={"Hello"} />
      <hr />
      <Section title={"Different Title"}>This is my Section</Section>
      <hr />
      <Counter />
      <hr />
      <CounterTwo setCount={setCount}> Count is {count} </CounterTwo>
      <hr />
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold"> {item} </span>}
      />
      <hr />
      <Test items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} />
    </>
  );
}

export default App;
