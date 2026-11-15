import { useState } from "react";
import DishCard from "../components/DishCard.jsx";
import { dishes, categories } from "../data/menu.js";

export default function Menu({ onAdd, cartCount, total, onClear }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const visible = dishes.filter(
    (d) =>
      (category === "All" || d.category === category) &&
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <h1>Our Menu</h1>

      <div className="cart-bar">
        🛒 {cartCount} item(s) · Total: <strong>₦{total.toLocaleString()}</strong>
        {cartCount > 0 && <button className="btn small outline" onClick={onClear}>Clear cart</button>}
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={c === category ? "chip active" : "chip"}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {visible.map((dish) => (
          <DishCard key={dish.id} dish={dish} onAdd={onAdd} />
        ))}
      </div>
      {visible.length === 0 && <p>No dishes found.</p>}
    </section>
  );
}
