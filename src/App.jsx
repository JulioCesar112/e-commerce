import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";
import ProductDetail from "./components/routes/ProductDetail";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import Purchases from "./components/routes/Purchases";
import Cart from "./components/shared/Cart";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  const [blackMode, setBlackMode] = useState("off");

  const handleBlackMode = () => {
    if (blackMode === "off") {
      setBlackMode("on");
    } else {
      setBlackMode("off");
    }
  };

  
  
  return (
    <div className="App">
      <Header blackMode={blackMode} />
      <Routes>
        <Route path="/" element={<Home blackMode={blackMode} />} />
        <Route path="/login" element={<Login blackMode={blackMode}/>} />
        <Route path="/product/:id" element={<ProductDetail blackMode={blackMode} />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path="/purchases" element={<Purchases blackMode={blackMode} />} />
          <Route path="/cart" element={<Cart/>}/>
        </Route>
        
      </Routes>
      <Footer blackMode={blackMode} handleBlackMode={handleBlackMode}/>
    </div>
  );
}

export default App;
