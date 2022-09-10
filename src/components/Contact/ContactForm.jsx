import './contactFormStyles.css';

const ContactForm = () => {
  return (
    <div className="container contact__container">
      <h3 className="contact__title">Contact Form</h3>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <input
          className="contact__input-field"
          type="text"
          name="user_name"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          className="contact__input-field"
          type="email"
          name="user_email"
          id="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact__input-field contact__textarea"
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
        <input className="btn contact__submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
