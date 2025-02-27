import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ActivityProvider } from "./context/ActivityContext";
import './style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActivityProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ActivityProvider>
  </React.StrictMode>
);
