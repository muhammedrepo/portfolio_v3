import { HeroWrapper } from "./HeroStyles";
import images from "../../constants/images";

import CSS from "csstype";

const Hero = () => {
  const bgStyle: CSS.Properties = {
    backgroundImage: `url(${images.slide5})`,
  };
  return (
    <HeroWrapper>
      <div className="muhats_hero" id="home">
        <div className="background">
          <div className="leftpart"></div>
          <div className="rightpart">
            <div className="inner">
              <div className="image" style={bgStyle}></div>

              <div className="overlay_image"></div>
              <div className="myOverlay"></div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="content_inner">
              <div className="name">
                <h3 className="stroke">Muhammed</h3>
                <h3>Tijani</h3>
                <span>Creative Web &amp; App Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
