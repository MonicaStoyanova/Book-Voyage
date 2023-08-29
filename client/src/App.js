import { Routes, Route } from "react-router";
import Navbar from "./components/NavigationBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
