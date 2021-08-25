import { useState } from "react";
import { fizzbuzz } from "../utils/fizzbuzz";

export default function FizzBuzz(): JSX.Element {
  const [sequence, setSequence] = useState<string[]>([]);

  const handleClick = () => {
    setSequence((prevSequence) => [
      ...prevSequence,
      fizzbuzz(prevSequence.length + 1),
    ]);
  };

  return (
    <div>
      <h1>Fizz Buzz</h1>
      <p>
        Current sequence:{" "}
        {sequence.map((term, index) => (
          <>{term}, </>
        ))}
      </p>
      <button onClick={handleClick}>Next number</button>
    </div>
  );
}
