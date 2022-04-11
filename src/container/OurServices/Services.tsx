import { ServicesWrapper } from "./ServicesStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";
import { serviceData } from "../../utils/serviceData";

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="coolzyte_tm_service service_inner w-full h-auto clear-both float-left mb-32">
        <div className="container">
          <div className="service_inner w-full h-auto clear-both float-left">
            <Swiper
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
                  <div className="item m-0">
                    <div className="list_inner flex flex-col sm:flex-row w-full h-auto clear-both float-left relative">
                      <img className="svg" src={item.img} alt="" />

                      <div className="details pl-20 text-left">
                        <h3 className="m-0 text-base font-semibold mb-4">
                          {item.title}
                        </h3>
                        <p className="italic">{item.description}</p>
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
