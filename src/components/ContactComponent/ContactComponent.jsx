import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

function ContactComponent() {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avs0jkc",
        "template_9z61ko5",
        form.current,
        "Kfjj5oTlX2byZ9Vnl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  // hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="contact_form"
      id="contact_form"
    >
      <div className="returnmessage">{result ? <Result /> : null}</div>
      <div className="empty_notice">
        <span>Please Fill Required Fields</span>
      </div>
      <div className="first">
        <ul>
          <li>
            <input name="name" type="text" placeholder="Name" required />
          </li>
          <li>
            <input name="email" type="text" placeholder="Email" required />
          </li>
        </ul>
      </div>
      <div className="last">
        <textarea name="message" placeholder="Message"></textarea>
      </div>
      <div className="coolzyte_tm_button">
        <button>
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}

export default ContactComponent;
