import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [showSpecial, setShowSpecial] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Hungry? You’re in the right place</h1>
          <p>
            Authentic Nigerian meals cooked fresh every day, from smoky jollof to
            spicy suya. Welcome to Flavour Kitchen.
          </p>
          <div className="btn-row">
            <Link to="/menu" className="btn">View our menu</Link>
            <Link to="/contact" className="btn outline">Contact us</Link>
          </div>
        </div>
        <img src="/images/hero.jpg" alt="A table of Nigerian dishes" />
      </section>

      <section className="section center">
        <h2>Today's Special</h2>
        <button className="btn" onClick={() => setShowSpecial(!showSpecial)}>
          {showSpecial ? "Hide special" : "Reveal today's special"}
        </button>
        {showSpecial && (
          <p className="special">🔥 Suya Platter, 15% off until 6pm!</p>
        )}
      </section>
    </>
  );
}
