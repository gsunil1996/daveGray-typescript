interface ListProps {
  items: string[];
}

const Test = ({ items }: ListProps) => {
  console.log("items", items);
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Test;
