/*
export default function App() {
  let uname = "PARI";
  let email = "pari@gmail.com";

  return (
    <div>
      <div> {uname} </div>
      <div> {email} </div>
    </div>
  );
}*/

import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(100);

  const incre = () => setCounter(counter + 1);
  const decre = () => setCounter(counter - 1);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <input type="button" value="Increament" onClick={incre} />

        <input type="button" value="Decreament" onClick={decre} />
      </div>
    </div>
  );
}
