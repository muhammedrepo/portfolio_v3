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
              ? "sm:hidden lg:flex animate fixed left-0 right-0 z-30 py-5 px-0 transition-all top-0"
              : "sm:hidden lg:flex fixed left-0 right-0 top-0 z-30 py-5 px-0 transition-all"
          }
        >
          <div className="container">
            <div className="w-full h-auto clear-both flex items-center justify-between">
              <Logo />
              <div>
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
            <div className="dropdown transition-all delay-200 ease-linear">
              <div className="container transition-all delay-500 ease-linear">
                <div className="dropdown_inner transition-all delay-500 ease-linear">
                  <ul className={toggleMenu ? "show-links" : "links"}>
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
