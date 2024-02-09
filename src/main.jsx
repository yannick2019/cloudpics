import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./context/FirestoreContext";
import "./index.css";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
