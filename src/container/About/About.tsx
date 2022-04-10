import { AboutWrapper } from "./AboutStyles";
import images from "../../constants/images";
import { SectionTitle } from "../../components";

const About = ({ handleClick }: { handleClick: any }) => {
  return (
    <AboutWrapper>
      <div className="about" id="about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <img className="thumbnail" src={images.about5} alt="" />
            </div>
            <div className="right">
              <div className="name">
                <SectionTitle name="Muhammed" title="About" />

                <span className="job">Creative Web &amp; App Developer</span>
              </div>
              <div className="text">
                <p>
                  My name is Muhammed Tijani. I work as a web developer, and I
                  am really enthusiastic and dedicated to my job.
                </p>
                <p>
                  Over the course of my years of experience as a professional
                  Web developer, I have gained the skills and expertise
                  essential to ensure the successful completion of your project.
                  Every stage of the design process, from brainstorming to
                  cooperation, is something I look forward to.
                </p>
              </div>
              <div className="coolzyte_tm_button" data-position="left">
                <button onClick={handleClick}>
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
