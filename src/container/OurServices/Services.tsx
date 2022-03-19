import { ServicesWrapper } from "./ServicesStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";
import { serviceData } from "../../utils/serviceData";

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="coolzyte_tm_service">
        <div className="container">
          <div className="service_inner">
            <Swiper
              // slidesPerView={3}
              // spaceBetween={10}
              // slidesPerGroup={3}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
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
              {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div className="list_inner">
                      <img className="svg" src={item.img} alt="" />

                      <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
