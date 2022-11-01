import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { HookApp } from "./HookApp";
// import { CounterApp } from "./Components/CounterApp";
import { CounterWithCustomHook } from "./Components/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    <FocusScreen />
  </React.StrictMode>
);
