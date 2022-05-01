import { HeroWrapper } from "./HeroStyles";
import images from "../../constants/images";

import CSS from "csstype";

const Hero = () => {
  const bgStyle: CSS.Properties = {
    backgroundImage: `url(${images.slide2})`,
  };
  return (
    <HeroWrapper>
      <div
        className="muhats_hero w-full h-screen clear-both float-left relative"
        id="home"
      >
        <div className="background absolute top-0 bottom-0 left-0 right-0">
          <div className="leftpart w-8 h-full bg-white absolute top-0 left-0"></div>
          <div className="rightpart w-full h-full float-left pl-[33%]">
            <div className="inner w-full h-full relative overflow-hidden">
              <div
                className="image absolute -top-5 -bottom-5 -left-5 -right-5 bg-no-repeat bg-cover bg-center z-10"
                style={bgStyle}
              ></div>

              <div className="overlay_image absolute top-0 bottom-0 w-full z-0"></div>
              <div className="myOverlay"></div>
            </div>
          </div>
        </div>
        <div className="content w-full h-full relative z-20">
          <div className="container h-full">
            <div className="content_inner absolute top-1/2 -translate-y-1/2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="500"
                className="name"
              >
                <h3 className="stroke text-black text-8xl font-extrabold m-0 p-0 ">
                  Hi, my name is
                </h3>
                <h3 className=" text-8xl font-extrabold uppercase m-0 p-0">
                  Muhammed
                </h3>
                <span className="font-[Poppins] font-bold inline-block pt-5 italic">
                  Creative Web &amp; App Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
