import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false); // menu open/closed on mobile
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={close}>🍲 Flavour Kitchen</NavLink>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? "✕" : "☰"}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/menu" onClick={close}>Menu (🛒 {cartCount})</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
      </nav>
    </header>
  );
}
