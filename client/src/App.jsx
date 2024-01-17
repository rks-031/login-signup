import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
