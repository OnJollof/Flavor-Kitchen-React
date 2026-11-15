// Replace the image URLs with your own food photos (put them in /public/images)
const img = (seed) => `https://picsum.photos/seed/${seed}/600/400`;

export const dishes = [
  { id: 1, name: "Jollof Rice & Chicken", category: "Mains", price: 5500, image: "/images/jollof.jpg", description: "Smoky party-style jollof served with grilled chicken and fried plantain." },
  { id: 2, name: "Vegetable Soup & Pounded Yam", category: "Mains", price: 4200, image: "/images/vegetable.jpg", description: "Rich, leafy vegetable soup with assorted meat, served with smooth pounded yam." },
  { id: 3, name: "Suya Platter", category: "BBQ", price: 3000, image: "/images/suya.jpg", description: "Spicy peanut-rubbed beef skewers with onions, tomatoes and yaji." },
  { id: 4, name: "Grilled Fish & Chips", category: "BBQ", price: 4800, image: "/images/fish.jpg", description: "Whole tilapia grilled with pepper sauce and crispy potato chips." },
  { id: 5, name: "Puff-Puff Box", category: "Snacks", price: 1500, image: "/images/puffpuff.jpg", description: "Twelve soft, golden, freshly fried puff-puff balls." },
  { id: 6, name: "Chapman Cocktail", category: "Drinks", price: 1800, image: "/images/chapman.jpg", description: "Chilled fruity non-alcoholic Nigerian classic with citrus and bitters." },
  { id: 7, name: "Grilled Chicken & Chips", category: "BBQ", price: 6500, image: "/images/chicken.jpg", description: "A whole fresh chicken grilled with pepper sauce and crispy potato chips." },
];

export const categories = ["All", "Mains", "BBQ", "Snacks", "Drinks"];