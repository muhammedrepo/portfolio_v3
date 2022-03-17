import Logo from "../Logo/Logo";

import { TopBar, TopBarInner, Menu, Links, MobileMenu } from "./NavbarStyles";

const Navbar = () => {
  return (
    <>
      <TopBar>
        <div className="container">
          <TopBarInner>
            <Logo />
            <Menu>
              <Links>
                <ul>
                  {["home", "about", "portfolio", "news", "contact"].map(
                    (item) => (
                      <li key={`link-${item}`} className="current">
                        <a href={`#${item}`}>
                          <span className="first">{item}</span>
                          <span className="second">{item}</span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </Links>
            </Menu>
          </TopBarInner>
        </div>
      </TopBar>

      <MobileMenu>
        <div className="topbar_inner">
          <div className="container bigger">
            <div className="topbar_in">
              <Logo />

              <div className="my_trigger">
                <div className="hamburger hamburger--collapse-r">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <div className="container">
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navbar;
