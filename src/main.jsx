import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./Components/CounterApp";
import { CounterWithCustomHook } from "./Components/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    <SimpleForm />
  </React.StrictMode>
);
