import { FC } from 'react';
import { AboutWrapper } from './AboutStyles';
import images from '../../constants/images';
import { SectionTitle } from '../../components';

interface AboutProps {
  handleClick: () => void;
}

const About: FC<AboutProps> = ({ handleClick }) => {
  return (
    <AboutWrapper>
      <div
        className="about w-full h-full clear-both float-left mb-[193px] pt-[230px]"
        id="about"
      >
        <div className="container">
          <div className="about_inner w-full h-full clear-both flex items-center">
            <div data-aos="fade-right" className="left w-[40%]">
              <img
                className="thumbnail min-w-[10%]"
                src={images.about5}
                alt=""
              />
            </div>
            <div data-aos="fade-left" className="right w-[60%] pl-20">
              <div className="name w-full float-left border-b pb-8 mb-8">
                <SectionTitle name="Muhat" title="About" />

                <span className="font-[Poppins] font-semibold inline-block pt-[10px] italic">
                  Creative Web &amp; App Developer
                </span>
              </div>
              <div className="text w-full float-left mb-6 italic">
                <p>
                  My name is Muhat and I enjoy creating things that live on the
                  internet. I work as a web developer, and I am really
                  enthusiastic and dedicated to my job.
                </p>
                <p>
                  Since I started working as a freelance designer almost 16
                  years ago, I've done remote work for agencies, consulted for
                  startups, and worked with talented people to make digital
                  products for both business and consumer use. I'm always
                  working to get better at design, one problem at a time.
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
