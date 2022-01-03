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
  let [list, setList] = useState([]);

  const tweet = () => {
    setList([...list, 1]);
  };

  return (
    <div>
      <input type="button" value="Tweet" onClick={tweet} />

      {list.map(() => (
        <div
          style={{
            background: "lightgreen",
            padding: "3px",
            border: "solid 1px white",
            margin: "3px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          voluptas totam error. Harum iste ipsa est at beatae perferendis sequi.
        </div>
      ))}
    </div>
  );
}
