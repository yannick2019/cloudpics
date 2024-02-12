import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Single from "./pages/Single.jsx";
import Stockimages from "./pages/Stockimages.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from "./context/FirestoreContext";
import "./index.css";
import AuthProvider, { useAuthContext } from "./context/AuthContext";

export function AppRoutes() {
  const { currentUser } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/images/:id" element={<Single />} />
      {currentUser && <Route path="/stock-images" element={<Stockimages />} />}
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
