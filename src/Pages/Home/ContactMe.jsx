import axios from "axios";

export default function ContactMe() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = `
      Yangi xabar:
      - Ism: ${formData.get("first-name")}
      - Familiya: ${formData.get("last-name")}
      - Email: ${formData.get("email")}
      - Telefon: ${formData.get("phone-number")}
      - Xabar: ${formData.get("message")}
    `;

    console.log("Yuborilgan xabar:", message);

    try {
      const response = await axios.post("http://localhost:5000/send-sms", {
        message: message,
      });

      if (response.data.success) {
        console.log("SMS muvaffaqiyatli yuborildi:", response.data.message);
        alert("SMS muvaffaqiyatli yuborildi!");
      } else {
        console.error("Xato:", response.data.message);
        alert("Xato yuz berdi: " + response.data.message);
      }
    } catch (error) {
      console.error("SMS yuborishda xato:", error);
      alert("Xatolik yuz berdi!");
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Agar fikr bildirmoqchi bolsangiz shu yerga yozing va submit tugmasini bosing
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
