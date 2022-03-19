import { AboutWrapper } from "./AboutStyles";
import images from "../../constants/images";
import { SectionTitle } from "../../components";

const About = () => {
  return (
    <AboutWrapper>
      <div className="coolzyte_tm_about" id="about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <img className="thumbnail" src={images.about1} alt="" />
              {/* Animation Image classNamees: thumbnail, thumbnail-2, thumbnail-3, thumbnail-4, */}
            </div>
            <div className="right">
              <div className="name">
                <SectionTitle name="Muhammed Tijani" title="About" />

                <span className="job">Creative Web &amp; App Developer</span>
              </div>
              <div className="text">
                <p>
                  My name is Muhammed Tijani. I am a Web Developer, and I'm very
                  passionate and dedicated to my work.
                </p>
                <p>
                  With 20 years experience as a professional Web developer, I
                  have acquired the skills and knowledge necessary to make your
                  project a success. I enjoy every step of the design process,
                  from discussion and collaboration.
                </p>
              </div>
              <div className="coolzyte_tm_button" data-position="left">
                {/* Position: left, center, right  */}
                <a href="#">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
