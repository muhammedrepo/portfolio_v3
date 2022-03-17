import { HeroWrapper } from "./HeroStyles";
import images from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

const Hero = () => {
  return (
    <HeroWrapper id="home">
      <div className="background">
        <div className="leftpart"></div>
        <div className="rightpart">
          <div className="inner">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 7500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="main_image">
                  <img src={images.slide1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_image">
                  <img src={images.slide2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="main_image">
                  <img src={images.slide4} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="overlay_image"></div>
            <div className="myOverlay"></div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="content_inner">
            <h3 className="stroke">Bernard</h3>
            <h3>Sydney</h3>
            <span>Creative Web &amp; App Developer</span>
          </div>
        </div>

        <div className="line_wrapper">
          <div className="line"></div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
