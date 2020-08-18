import React, { useState } from "react";

function Functional() {
  const [state, setstate] = useState(0);
  return (
    <div>
      <button onClick={(e) => console.log(e)}></button>
      <input type="text" onChange={(e) => console.log(e)} />
      <h1>{state}</h1>
    </div>
  );
}

export default Functional;
