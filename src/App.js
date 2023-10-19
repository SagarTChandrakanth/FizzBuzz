import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState(15);

  const handleMaxNumberChange = (e) => {
    const value = e.target.value;
    setData(value);
  };

  const generateFizzBuzz = () => {
    const result = [];
    for (let i = 1; i <= data; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    return result;
  };

  return (
    <div className="App">
      <h1>{data}</h1>
      <input type="number" value={data} onChange={handleMaxNumberChange} />
      <ul>
        {generateFizzBuzz().map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
