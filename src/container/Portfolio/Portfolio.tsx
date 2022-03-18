import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { PortfolioWrapper } from "./PortfolioStyles";
import images from "../../constants/images";

const Portfolio = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleSwitch = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <PortfolioWrapper>
      <div className="coolzyte_tm_portoflio" id="portfolio">
        <div className="container">
          <div className="coolzyte_tm_main_title">
            <div className="title">
              <h3>
                Featured Works<span className="bg">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_filter">
              {toggle &&
                ["All", "Html/Css", "UI/UX", "Web App", "React JS"].map(
                  (item, index) => (
                    <ul key={index}>
                      <li>
                        <a
                          href={`#${item}`}
                          className="current"
                          data-filter="*"
                        >
                          <span className="first">{item}</span>
                          <span className="second">{item}</span>
                        </a>
                      </li>
                    </ul>
                  )
                )}

              <div className="wrapper" onClick={ToggleSwitch}>
                <a>
                  <span className="trigger"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio_inner">
            <ul className="gallery_zoom">
              <li className="vimeo">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div className="main"></div>
                    <a
                      className="full_link popup-vimeo"
                      href="https://vimeo.com/312334044"
                    ></a>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">Sweet Cherry</a>
                    </h3>
                    <span>
                      <a href="#">Vimeo</a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="youtube">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url={images.portfolio2}
                    ></div>
                    <a
                      className="full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=Amq-qlqbjYA"
                    ></a>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">Delicious Fruit</a>
                    </h3>
                    <span>
                      <a href="#">Youtube</a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="soundcloud">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/3.jpg"
                    ></div>
                    <a
                      className="full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252739311&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=truehttps://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252739311&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></a>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">Blue Lemon</a>
                    </h3>
                    <span>
                      <a href="#">Soundcloud</a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="image">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/4.jpg"
                    ></div>
                    <a
                      className="full_link zoom"
                      href="img/portfolio/4.jpg"
                    ></a>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">Yellow Phone</a>
                    </h3>
                    <span>
                      <a href="#">Image</a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="image">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/5.jpg"
                    ></div>
                    <a
                      className="full_link zoom"
                      href="img/portfolio/5.jpg"
                    ></a>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">Ice Cream</a>
                    </h3>
                    <span>
                      <a href="#">Image</a>
                    </span>
                  </div>
                </div>
              </li>
              <li className="image">
                <div className="list_inner">
                  <div className="image">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/portfolio/6.jpg"
                    ></div>
                    <a
                      className="full_link zoom"
                      href="img/portfolio/6.jpg"
                    ></a>
                  </div>
                  <div className="title">
                    <h3>
                      <a href="#">Good Present</a>
                    </h3>
                    <span>
                      <a href="#">Image</a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PortfolioWrapper>
  );
};

export default Portfolio;
