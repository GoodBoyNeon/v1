import './contactForm.style.css';

const ContactForm = () => {
  return (
    <div className="container contact-form__container">
      <h3 className="contact-form__title">Contact Form</h3>
      <form className="contact-form__form">
        <input
          className="contact-form__input-field"
          type="text"
          name="user_name"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          className="contact-form__input-field"
          type="email"
          name="user_email"
          id="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="contact-form__input-field contact-form__textarea"
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
        <input className="btn contact-form__submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
