import { images } from "../../constants";
import { aboutModalData } from "../../utils/aboutModalData";
import "./AboutModalStyles";
import { ModalAbout } from "./AboutModalStyles";
import { ThumbUpIcon } from "@heroicons/react/solid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

const AboutModal = ({ closeModal }: { closeModal: any }) => {
  return (
    <ModalAbout>
      <div className="modalbox_about" onClick={() => closeModal()}>
        <div className="box_inner">
          <div className="close">
            <a onClick={() => closeModal()}>
              <img className="svg" src={images.cancel} alt="" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="my_box">
              <div className="left">
                <div className="about_title">
                  <h3>Programming Skills</h3>
                </div>
                <div className="coolzyte_progress">
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">HTML &amp; CSS</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Bootstrap</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Sass</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label"> Javascript</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="about_title">
                  <h3>Programming Skills</h3>
                </div>
                <div className="coolzyte_progress">
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">Reactjs</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Nextjs</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Gatsby</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">RESTful Services and APIs</span>{" "}
                      <span className="number">
                        <ThumbUpIcon />
                      </span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="progress">
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">React</span>{" "}
                      <span className="number">95%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">Youruba</span>{" "}
                      <span className="number">95%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                  <div className="progress_inner" data-value="85">
                    <span>
                      <span className="label">Arabian</span>{" "}
                      <span className="number">85%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in"></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="counter">
              <div className="about_title">
                <h3>Fun Facts</h3>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    <h3>126+</h3>
                    <span>Projects Completed</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>96+</h3>
                    <span>Happy Clients</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>192K+</h3>
                    <span>Lines of Code</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="partners">
              <div className="about_title">
                <h3>Our Partners</h3>
              </div>
              <Swiper
                breakpoints={{
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 2,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <ul className="partners_logo">
                  {aboutModalData.map((item, index) => (
                    <SwiperSlide className="item" key={index}>
                      <a>
                        <img src={item.img} alt="" />
                      </a>
                    </SwiperSlide>
                  ))}
                </ul>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </ModalAbout>
  );
};

export default AboutModal;
