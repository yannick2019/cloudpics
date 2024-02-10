import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Stockimages from "./pages/Stockimages.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from "./context/FirestoreContext";
import "./index.css";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/stock-images" element={<Stockimages />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
