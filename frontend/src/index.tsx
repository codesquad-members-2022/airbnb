import React from "react";

import ReactDOM from "react-dom/client";

import QueryParser from "contexts/QueryContexts";
import Router from "router/router";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <QueryParser>
        <App />
      </QueryParser>
    </Router>
  </React.StrictMode>
);
