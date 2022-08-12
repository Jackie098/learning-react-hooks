import { useCallback, useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import axios from "axios";

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("APP: RE_RENDER");
  });

  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      <h3>useMemo</h3>
      <div>count: {count}</div>
    </div>
  );
}
