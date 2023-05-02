import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Register from "./components/auth/register/register";
import Login from "./components/auth/Login";
=======
import Register from "./features/auth/components/register/register";
import Login from "./features/auth/components/login/Login";
>>>>>>> ebdbf9d9364f8bbccd7f896082763d55aaccecf6
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
