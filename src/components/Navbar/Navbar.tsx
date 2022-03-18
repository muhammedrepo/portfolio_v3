import { useState } from "react";

import Logo from "../Logo/Logo";

import { TopBar, MobileMenu } from "./NavbarStyles";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [topbarScroll, setTopbarScroll] = useState(false);

  const toggleMenuSwitch = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  const animateTopbar = () => {
    if (window.scrollY >= 100) {
      setTopbarScroll(true);
    } else {
      setTopbarScroll(false);
    }
  };

  window.addEventListener("scroll", animateTopbar);

  return (
    <>
      <TopBar>
        <div
          className={
            topbarScroll
              ? "coolzyte_tm_topbar opened animate"
              : "coolzyte_tm_topbar opened"
          }
        >
          <div className="container">
            <div className="topbar_inner">
              <Logo />
              <div className="menu">
                <div className="links">
                  <ul className="anchor_nav">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopBar>

      <MobileMenu>
        <div className="coolzyte_tm_mobile_menu">
          <div className="topbar_inner">
            <div className="container bigger">
              <div className="topbar_in">
                <Logo />

                <div className="my_trigger">
                  <div
                    className={
                      toggleMenu
                        ? "hamburger hamburger--collapse-r is-active"
                        : "hamburger hamburger--collapse-r"
                    }
                    onClick={toggleMenuSwitch}
                  >
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {toggleMenu && (
            <div className="dropdown">
              <div className="container">
                <div className="dropdown_inner">
                  <ul className="anchor_nav">
                    {["home", "about", "portfolio", "news", "contact"].map(
                      (item) => (
                        <li key={`link-${item}`}>
                          <a href={`#${item}`} onClick={toggleMenuSwitch}>
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </MobileMenu>
    </>
  );
};

export default Navbar;
