import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./components/Providers/AuthContext";
import AuctionContextProvider from "./components/Providers/AuctionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuctionContextProvider>
        <App />
      </AuctionContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
