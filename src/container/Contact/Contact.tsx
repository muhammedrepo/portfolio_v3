import { SectionTitle } from "../../components";
import { Wrapper } from "./ContactStyles";
import MapContainer from "../../components/googleMap/GoogleMap";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

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
              <div className="left">
                <div className="fields">
                  <ContactComponent />
                </div>
              </div>
              <div className="right">
                <div className="map_wrap">
                  <div className="map" id="ieatmaps">
                    <MapContainer />
                  </div>
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
