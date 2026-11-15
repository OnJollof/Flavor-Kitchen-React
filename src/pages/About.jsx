import InfoCard from "../components/InfoCard.jsx";

const values = [
  { icon: "🎯", title: "Our Mission", text: "To serve fresh, affordable Nigerian meals that bring people together." },
  { icon: "👁️", title: "Our Vision", text: "To become the most loved local kitchen in Oyo State." },
  { icon: "🌿", title: "Our Values", text: "Fresh ingredients, honest prices, clean kitchens and friendly service." },
];

export default function About() {
  return (
    <section className="section">
      <h1>About Flavor Kitchen</h1>
      <p>
        Flavor Kitchen is a family-run restaurant that prepares traditional Nigerian
        dishes for dine-in, takeaway and delivery customers.
      </p>
      <h2>Our Story</h2>
      <p>
        Founded in 2018 in Ibadan, we started as a small food stall serving jollof
        rice to students. Thanks to loyal customers, we grew into a full restaurant
        with a team of twelve cooks and servers.
      </p>
      <div className="grid">
        {values.map((v) => (
          <InfoCard key={v.title} icon={v.icon} title={v.title} text={v.text} />
        ))}
      </div>
    </section>
  );
}
