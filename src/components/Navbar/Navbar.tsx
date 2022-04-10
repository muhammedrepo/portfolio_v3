import { useState } from "react";

import Logo from "../Logo/Logo";
import PageLinks from "../../constants/links";
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
              ? "muhats_topbar opened animate"
              : "muhats_topbar opened"
          }
        >
          <div className="container">
            <div className="topbar_inner">
              <Logo />
              <div className="menu">
                <div className="links">
                  <PageLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopBar>

      <MobileMenu>
        <div className="muhats_mobile_menu transition ease-in-out delay-150">
          <div className="topbar_inner transition ease-in-out delay-250">
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
                    {["home", "about", "projects", "contact"].map((item) => (
                      <li key={`link-${item}`} onClick={toggleMenuSwitch}>
                        <a href={`#${item}`}>{item}</a>
                      </li>
                    ))}
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
