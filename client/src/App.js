import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/NavigationBar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";
import Register from "./components/Register/Register";

import Details from "./pages/Details/Details";
import MyLists from "./pages/MyLists/MyLists";
import Footer from "./components/Footer/Footer";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <main>
      <ToastContainer hideProgressBar={true} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/mylists" element={<MyLists />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
