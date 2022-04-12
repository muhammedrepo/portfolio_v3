import { aboutModalData } from "../../utils/aboutModalData";
import "./AboutModalStyles";
import { ModalAbout } from "./AboutModalStyles";
import { ThumbUpIcon, XCircleIcon } from "@heroicons/react/solid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

const AboutModal = ({ closeModal }: { closeModal: any }) => {
  return (
    <ModalAbout>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="500"
        className="modalbox_about"
        onClick={() => closeModal()}
      >
        <div className="box_inner">
          <div className="close">
            <button onClick={() => closeModal()}>
              <XCircleIcon className="h-10 w-10" />
            </button>
          </div>
          <div className="description_wrap">
            <div className="my_box">
              <div className="left">
                <div className="about_title">
                  <h3 className="font-semibold text-black text-xl">
                    Programming Skills
                  </h3>
                </div>
                <div className="progress">
                  <div className="progress_inner">
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
                  <div className="progress_inner">
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
                  <div className="progress_inner">
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
                  <div className="progress_inner">
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
                  <h3 className="font-semibold text-black text-xl">
                    Programming Skills
                  </h3>
                </div>
                <div className="progress">
                  <div className="progress_inner">
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
                  <div className="progress_inner">
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
                  <div className="progress_inner">
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
                  <div className="progress_inner">
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
                    <h3>49+</h3>
                    <span>Happy Clients</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>250K+</h3>
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
                      <li>
                        <img src={item.img} alt="" />
                      </li>
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
