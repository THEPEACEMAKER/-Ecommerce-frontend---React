import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
