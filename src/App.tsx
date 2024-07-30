import "./styles.css";
import Select, { ValueType } from "react-select";
import { useState } from "react";

const options = [
  { label: "apple", value: 1 },
  { label: "orange", value: 2 },
  { label: "kiwi", value: 3 }
];

export default function App() {
  const [items, setItems] = useState<ValueType<typeof options[0], true>>();

  console.log(items);

  const handleOption = (selections: ValueType<typeof options[0], true>) => {
    setItems(selections);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Select isMulti options={options} onChange={handleOption} />
    </div>
  );
}
