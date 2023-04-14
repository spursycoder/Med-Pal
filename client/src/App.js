import React from "react";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Calendar from "./components/Calendar";
import TabletManager from "./pages/TabletManager";
import Appointments from "./pages/Appointments";
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import Charts from "./pages/ChartsPage";
import ErrorPage from "./pages/ErrorPage";
import ErrorPageLink from "./pages/ErrorPageLink";
import { useAuthContext } from "./hooks/useAuthContext";



const App = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/dashboard" /> : <Register />
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard /> : <Navigate to="/error" />
          }
        />
        <Route
          path="/about"
          element={user ? <About /> : <Navigate to="/error" />}
        />
        <Route
          path="/calendar"
          element={
            user ? <Calendar /> : <Navigate to="/error" />
          }
        />
        <Route
          path="/medicines"
          element={
            user ? <TabletManager /> : <Navigate to="/error" />
          }
        />
        <Route
          path="/appointments"
          element={
            user ? <Appointments /> : <Navigate to="/error" />
          }
        />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/error" />}
        />
        <Route
          path="/search"
          element={user ? <Search /> : <Navigate to="/error" />}
        />
        <Route
          path="/charts"
          element={user ? <Charts /> : <Navigate to="/error" />}
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPageLink />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
