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
 
  const 학교이름들 = ["경기고", "현대고", "세화고", "청담고", "휘문고"];

  return (
    <div>
      <h1>서울시 소재 고등학교의 학생수</h1>
      {학교이름들.map((학교이름) => (
        <div>
          <h2>{학교이름}</h2>
          <Counter />
        </div>
      ))}
    </div>
  );
}

export default App;
