import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
}

export default function App() {
  // State lives in the parent and is passed down to children as props
  const [cart, setCart] = useState(loadCart);

  // useEffect: save the cart to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (dish) => setCart((prev) => [...prev, dish]);
  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/menu"
            element={<Menu onAdd={addToCart} cartCount={cart.length} total={total} onClear={clearCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
