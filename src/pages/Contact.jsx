import { useState } from "react";

const empty = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(empty); // controlled inputs
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSuccess(true);
      setValues(empty);
    }
  };

  return (
    <section className="section">
      <h1>Contact Us</h1>
      <div className="contact-layout">
        <div className="contact-info">
          <p>📍 12 Ring Road, Ibadan, Oyo State</p>
          <p>📞 +234 800 000 0000 (sample)</p>
          <p>✉️ hello@flavorkitchen.example</p>
          <p>🕒 Mon – Sat, 9am – 9pm</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {success && <p className="success">✅ Thank you! Your message has been sent.</p>}

          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={values.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" value={values.subject} onChange={handleChange} />
          {errors.subject && <span className="error">{errors.subject}</span>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}
