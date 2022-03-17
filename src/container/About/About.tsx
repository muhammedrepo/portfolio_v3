import { AboutWrapper } from "./AboutStyles";
import images from "../../constants/images";

const About = () => {
  return (
    <AboutWrapper id="about">
      <div className="container">
        <div className="about_inner">
          <div className="left">
            <img className="thumbnail" src={images.about1} alt="" />
          </div>
          <div className="right">
            <div className="name">
              <h3>
                Bernard Sydney<span className="bg">About</span>
              </h3>
              <span className="job">Creative Web &amp; App Developer</span>
            </div>
            <div className="text">
              <p>
                My name is Bernard Sydney. I am a Web Developer, and I'm very
                passionate and dedicated to my work.
              </p>
              <p>
                With 20 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
            </div>
            <div className="waxon_tm_button" data-position="left">
              <a href="#">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
