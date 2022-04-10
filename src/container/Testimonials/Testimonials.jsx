import { TestimonialsWrapper } from "./TestimonialsStyles";
import images from "../../constants/images";
import { SectionTitle } from "../../components";
import { useState } from "react";

const Testimonials = () => {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  return (
    <TestimonialsWrapper>
      <div className="coolzyte_tm_testimonials">
        <div className="container">
          <SectionTitle name="What Clients Say" title="Testimonials" />

          <div className="testi_inner">
            <div className="left">
              <div className="quote_list">
                <ul>
                  <li className={!active ? "box active" : "box"}>
                    <img className="svg" src={images.quote1} alt="" />
                    <p className="text">
                      Good overall template. I am getting back into coding and
                      had a simple question for the author. They responded
                      within 30 minutes and answered my question. Highly
                      recommend.
                    </p>
                    <div className="details">
                      <div className="image">
                        <div className="main" data-img-url="img/about/3.jpg">
                          <img className="svg" src={images.about1} alt="" />
                        </div>
                      </div>
                      <div className="short">
                        <h3 className="author">
                          <span>Victoria Umaru</span>
                        </h3>
                        <h3 className="job">
                          <span>CEO Local Pride</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className={activeTwo ? "box2 active" : "box2"}>
                    <img className="svg" src={images.quote1} alt="" />
                    <p className="text">
                      I can't believe I got support and my problem resolved in
                      just minutes from posting my question. Simply amazing team
                      and amazing theme! Thank you very much guys for excellent
                      support!
                    </p>
                    <div className="details">
                      <div className="image">
                        <div className="main" data-img-url="img/about/3.jpg">
                          <img className="svg" src={images.about2} alt="" />
                        </div>
                      </div>
                      <div className="short">
                        <h3 className="author">
                          <span>Isaac Olaosebikan</span>
                        </h3>
                        <h3 className="job">
                          <span>CEO Avid Digital Academy</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li className={activeThree ? "box3 active" : "box3"}>
                    <img className="svg" src={images.quote1} alt="" />
                    <p className="text">
                      Awesome template, well written code and looks great on any
                      platform. The customer support is very helpful and as huge
                      asset to this template. Overall a good design, that I am
                      quite happy with.
                    </p>
                    <div className="details">
                      <div className="image">
                        <div className="main" data-img-url="img/about/3.jpg">
                          <img className="svg" src={images.about3} alt="" />
                        </div>
                      </div>
                      <div className="short">
                        <h3 className="author">
                          <span>Seweje Nike</span>
                        </h3>
                        <h3 className="job">
                          <span>Business Developer</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image_list">
                <ul>
                  <li
                    onMouseEnter={() => setActive(false)}
                    onMouseLeave={() => setActive(true)}
                  >
                    <div className="image">
                      <img src={images.thumb1} alt="" />
                      <div className="main first-item">
                        <img src={images.about1} alt="" />
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => setActiveTwo(true)}
                    onMouseLeave={() => setActiveTwo(false)}
                  >
                    <div className="image">
                      <img src={images.thumb2} alt="" />
                      <div className="main">
                        <img src={images.about2} alt="" />
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseEnter={() => setActiveThree(true)}
                    onMouseLeave={() => setActiveThree(false)}
                  >
                    <div className="image">
                      <img src={images.thumb3} alt="" />
                      <div className="main">
                        <img src={images.about3} alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
