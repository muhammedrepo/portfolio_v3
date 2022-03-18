import { PortfolioWrapper } from "./PortfolioStyles";
import images from "../../constants/images";

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <div className="container">
        <div className="coolzyte_tm_main_title">
          <div className="title">
            <h3>
              Featured Works<span className="bg">Portfolio</span>
            </h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a href="#" className="current" data-filter="*">
                  <span className="first">All</span>
                  <span className="second">All</span>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".vimeo">
                  <span className="first">Html/Css</span>
                  <span className="second">Html/Css</span>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".youtube">
                  <span className="first">Javascript</span>
                  <span className="second">Javascript</span>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".soundcloud">
                  <span className="first">React</span>
                  <span className="second">React</span>
                </a>
              </li>
              <li>
                <a href="#" data-filter=".image">
                  <span className="first">Image</span>
                  <span className="second">Image</span>
                </a>
              </li>
            </ul>
            <div className="wrapper">
              <a href="#">
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
                  <div className="main" data-img-url={images.portfolio2}></div>
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
                  <a className="full_link zoom" href="img/portfolio/4.jpg"></a>
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
                  <a className="full_link zoom" href="img/portfolio/5.jpg"></a>
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
                  <a className="full_link zoom" href="img/portfolio/6.jpg"></a>
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
    </PortfolioWrapper>
  );
};

export default Portfolio;
