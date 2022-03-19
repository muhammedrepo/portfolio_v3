import { SectionTitle } from "../../components";
import { Wrapper } from "./ContactStyles";

const Contact = () => {
  return (
    <Wrapper>
      <div className="coolzyte_tm_contact" id="contact">
        <div className="bg_image"></div>
        <div className="container">
          <div className="contact_inner">
            <SectionTitle name="Get in Touch" title="Contact" />

            <div className="desc">
              <p>
                Please fill out the form on this section to contact with me. Or
                call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
              </p>
            </div>
            <div className="wrapper">
              <div className="left wow fadeInLeft" data-wow-duration="0.8s">
                <div className="fields">
                  <form
                    action="/"
                    method="post"
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className="first">
                      <ul>
                        <li>
                          <input id="name" type="text" placeholder="Name" />
                        </li>
                        <li>
                          <input id="email" type="text" placeholder="Email" />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="coolzyte_tm_button" data-position="left">
                      <a id="send_message" href="#">
                        <span>Send Message</span>
                      </a>
                    </div>

                    {/* If you want to change mail address to yours, please open modal.php and go to line 4  */}
                  </form>
                </div>
              </div>
              <div className="right wow fadeInRight" data-wow-duration="0.8s">
                <div className="map_wrap">
                  <div className="map" id="ieatmaps"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
