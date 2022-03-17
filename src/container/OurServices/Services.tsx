import { ServicesWrapper } from "./ServicesStyles";
import images from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="container">
        <div className="service_inner">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={3}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="item">
              <div className="item-link">
                <div className="list_inner">
                  <img className="svg" src={images.code} alt="" />
                  <div className="details">
                    <h3>Web Development</h3>
                    <p>
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="item-link">
                <div className="list_inner">
                  <img className="svg" src={images.creative} alt="" />
                  <div className="details">
                    <h3>Creative Design</h3>
                    <p>
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="item-link">
                <div className="list_inner">
                  <img className="svg" src={images.telegram} alt="" />
                  <div className="details">
                    <h3>Brand Identity</h3>
                    <p>
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="item-link">
                <div className="list_inner">
                  <img className="svg" src={images.photoshop} alt="" />
                  <div className="details">
                    <h3>Adobe Photoshop</h3>
                    <p>
                      Web design is a similar process of creation, with the
                      intention intention of the pre presenting...
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
