import { AboutWrapper } from "./AboutStyles";
import images from "../../constants/images";
import { SectionTitle } from "../../components";

const About = ({ handleClick }: { handleClick: any }) => {
  return (
    <AboutWrapper>
      <div
        className="about w-full h-full clear-both float-left mb-[193px] pt-[230px]"
        id="about"
      >
        <div className="container">
          <div className="about_inner w-full h-full clear-both flex items-center">
            <div className="left w-[40%]">
              <img
                className="thumbnail min-w-[10%]"
                src={images.about5}
                alt=""
              />
            </div>
            <div className="right w-[60%] pl-20">
              <div className="name w-full float-left border-b pb-8 mb-8">
                <SectionTitle name="Muhammed" title="About" />

                <span className="font-[Poppins] font-semibold inline-block pt-[10px] italic">
                  Creative Web &amp; App Developer
                </span>
              </div>
              <div className="text w-full float-left mb-6 italic">
                <p>
                  My name is Muhammed Tijani. I work as a web developer, and I
                  am really enthusiastic and dedicated to my job.
                </p>
                <p>
                  Over the course of my years of experience as a Web developer,
                  I have gained the skills and expertise essential to ensure the
                  successful completion of your project. Every stage of the
                  design process, from brainstorming to cooperation, is
                  something I look forward to.
                </p>
              </div>
              <div className="coolzyte_tm_button">
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
