import { useCallback, useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import axios from "axios";

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState(0);
  const [users, setUsers] = useState(0);
  

  const getUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(data);
  }

  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      <h3>useMemo</h3>
      <input type="text" onChange={event => setQuery(event.target.value)} />
    </div>
  );
}
