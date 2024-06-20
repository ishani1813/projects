// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
