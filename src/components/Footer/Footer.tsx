import { Wrapper } from "./FooterStyles";

import { FaCodepen, FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div className="coolzyte_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <ul>
              <li className="wow fadeInDown" data-wow-duration="0.8s">
                <span>Muhats</span>
                <span>Creative Web & App Development</span>
              </li>
              {/* <li
                className="wow fadeInDown"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <span>Pentagon Plaza,</span>
                <span>Allen Ave, Lagos, Nigeira</span>
              </li> */}
              <li
                className="wow fadeInDown"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                <span>
                  &copy; {new Date().getFullYear()} Crafted by Muhammed Tijani.
                  <br />
                  All rights reserved. Built with{" "}
                  <a
                    className="text-blue-400"
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </a>
                </span>
              </li>
              <li
                className="wow fadeInDown"
                data-wow-duration="0.8s"
                data-wow-delay="0.6s"
              >
                <div className="social">
                  <ul>
                    <li>
                      <a href="#home">
                        <span className="first">
                          <FaTwitter />
                        </span>
                        <span className="second">
                          <FaTwitter />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#home">
                        <span className="first">
                          <FaDribbble />
                        </span>
                        <span className="second">
                          <FaDribbble />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/coolzyte"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="first">
                          <FaCodepen />
                        </span>
                        <span className="second">
                          <FaCodepen />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/coolzyte"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="first">
                          <FaGithub />
                        </span>
                        <span className="second">
                          <FaGithub />
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
