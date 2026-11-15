export default function InfoCard({ icon, title, text }) {
  return (
    <div className="info-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
