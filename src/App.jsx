import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./containers/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red-50  m-2 p-2  font-semibold">
        <Header />
      </div>
    </>
  );
}

export default App;
