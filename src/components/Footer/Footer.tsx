import { Wrapper } from "./FooterStyles";

import {
  FaDribbbleSquare,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="coolzyte_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <ul>
              <li className="wow fadeInDown" data-wow-duration="0.8s">
                <span>Muhats</span>
                <span>PORTFOLIO</span>
              </li>
              <li
                className="wow fadeInDown"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <span>Pentagon Plaza,</span>
                <span>Allen Ave, Lagos, Nigeira</span>
              </li>
              <li
                className="wow fadeInDown"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                <span>
                  <a href="#href">info@muhats.com</a>
                </span>
                <span>+234 8076319032</span>
              </li>
              <li
                className="wow fadeInDown"
                data-wow-duration="0.8s"
                data-wow-delay="0.6s"
              >
                <div className="social">
                  <ul>
                    <li>
                      <a href="#href">
                        <span className="first">
                          <FaFacebookF />
                        </span>
                        <span className="second">
                          <FaFacebookF />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#href">
                        <span className="first">
                          <FaTwitter />
                        </span>
                        <span className="second">
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#href">
                        <span className="first">
                          <FaInstagramSquare />
                        </span>
                        <span className="second">
                          <FaInstagramSquare />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#href">
                        <span className="first">
                          <FaDribbbleSquare />
                        </span>
                        <span className="second">
                          <FaDribbbleSquare />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#href">
                        <span className="first">
                          <FaYoutube />
                        </span>
                        <span className="second">
                          <FaYoutube />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
