import { TestimonialsWrapper } from "./TestimonialsStyles";
import { SectionTitle } from "../../components";
import { useState } from "react";
import { testiData } from "../../utils/testimonialData";

const Testimonials = () => {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <TestimonialsWrapper>
      <div className="w-full h-auto clear-both float-left mb-24">
        <div className="container">
          <SectionTitle name="What Clients Say" title="Testimonials" />

          <div className="testi_inner w-full h-auto clear-both flex items-center pt-[105px]">
            <div className="left w-1/2 pr-[50px]">
              <div className="quote_list w-full h-auto float-left">
                <ul className="m-0 list-none relative h-full flex items-center">
                  {testiData.map((item, id) => (
                    <li
                      key={item.id}
                      className={` ${isHovering === id ? "active" : ""}`}
                    >
                      <img className="svg" src={item.quoteImg} alt="" />
                      <p className="text">{item.desc}</p>
                      <div className="details">
                        <div className="image">
                          <div className="main">
                            <img
                              className="svg"
                              src={item.authorImage}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="short">
                          <h3 className="author">
                            <span>{item.author}</span>
                          </h3>
                          <h3 className="job">
                            <span>{item.job}</span>
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image_list">
                <ul className="masonry">
                  {testiData.map((item, id) => (
                    <li
                      className="active relative"
                      onMouseEnter={() => setIsHovering(id)}
                      onMouseLeave={() => setIsHovering(0)}
                    >
                      <div className="image">
                        <div className="main">
                          <img src={item.authorImage} alt="" />
                        </div>
                        <div
                          className={`${isHovering === id ? "" : "overlay"}`}
                        ></div>
                      </div>
                    </li>
                  ))}
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

// {activeThree ? "box3 active" : "box3"}
