import { useState } from "react";

// Reusable component: receives its data through props
export default function DishCard({ dish, onAdd }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="card">
      <img src={dish.image} alt={dish.name} loading="lazy" />
      <div className="card-body">
        <span className="tag">{dish.category}</span>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div className="card-footer">
          <strong>₦{dish.price.toLocaleString()}</strong>
          <button className="icon-btn" onClick={() => setLiked(!liked)} aria-label="Favourite">
            {liked ? "❤️" : "🤍"}
          </button>
          <button className="btn small" onClick={() => onAdd(dish)}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}
