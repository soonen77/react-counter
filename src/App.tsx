import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setcount = 리턴값[1];

  return (
    <div>
      <h1>{count}</h1>
      <h2>
        <button onClick={() => setcount((현재count) => 현재count + 1)}>
          ▲
        </button>
        <button onClick={() => setcount(0)}>
          ○
        </button>
        <button onClick={() => setcount((현재count) => 현재count - 1)}>
          ▼
        </button>
      </h2>
    </div>
  );
}

export default App;
