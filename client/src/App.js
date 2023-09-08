import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import AppContextProvider from "./context/appContext";
import { AuthContextProvider } from "./context/authContext";

import Navbar from "./components/NavigationBar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import MyLists from "./components/MyLists/MyLists";

function App() {
  return (
    <main>
      <AuthContextProvider>
        <AppContextProvider>
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
          </Routes>
          <Footer />
        </AppContextProvider>
      </AuthContextProvider>
    </main>
  );
}

export default App;
