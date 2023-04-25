import { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

function ContactComponent(): JSX.Element {
  const [result, showResult] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_avs0jkc',
        'template_9z61ko5',
        form.current!,
        'Kfjj5oTlX2byZ9Vnl'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log(response.text);
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
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
        <textarea name="message" placeholder="Message" required></textarea>
      </div>
      <div className="coolzyte_tm_button">
        <button type="submit">
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}

export default ContactComponent;
