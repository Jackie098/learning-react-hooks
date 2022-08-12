import { useCallback, useEffect, useState } from "react";
// import ReactDOM from 'react-dom';

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("APP: RE_RENDER");
  });

  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      <h3>useCallback</h3>
      <div>count: {count}</div>

      <Button onClick={useCallback(() => setCount((prev) => prev + 1), [])}>
        Increment
      </Button>
    </div>
  );
}

const Button = ({ ...props }) => {
  useEffect(() => {
    console.log("BUTTON: RE_RENDER");
  });

  useEffect(() => {
    console.log("BUTTON: ON CLICK CHANGED");
  }, [props.onClick]);

  return <button {...props} />;
};
