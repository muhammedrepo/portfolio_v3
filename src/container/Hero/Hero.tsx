import { HeroWrapper } from "./HeroStyles";
import images from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="coolzyte_tm_hero" id="home">
        <div className="background">
          <div className="leftpart"></div>
          <div className="rightpart">
            <div className="inner">
              <div className="fn_cs_personal_slider">
                <div className="swiper-container">
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
                </div>
              </div>

              <div className="overlay_image"></div>
              <div className="myOverlay"></div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="content_inner">
              <div className="name">
                {/* If you can't see clearly your texts with hero image, please open style.css and search this word " .coolzyte_tm_hero .background .overlay_image " with CTRL+F and enable comment */}
                <h3 className="stroke">Muhammed</h3>
                <h3>Tijani</h3>
                <span>Creative Web &amp; App Developer</span>
              </div>
            </div>
            <div className="coolzyte_tm_down" data-skin="dark" data-position="">
              {/* Skin: "", dark */}
              {/* Position: left, center, right */}
              <div className="line_wrapper">
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
