import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counter() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setcount = 리턴값[1];

  let 리셋버튼;
  if (count !== 0) {
    리셋버튼 = <button onClick={() => setcount(0)}>○</button>;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount((현재count) => 현재count + 1)}>▲</button>
      <button onClick={() => setcount((현재count) => 현재count - 1)}>▼</button>
      {리셋버튼}
    </div>
  );
}

function App() {
  const array = new Array(1000).fill(Counter);
  return array.map((Counter) => <Counter />);
}

export default App;
