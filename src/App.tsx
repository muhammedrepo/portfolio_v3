import { useEffect, useState } from "react";
import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonials,
  Contact,
} from "./container";

import { Navbar } from "./components";
import { AppWrap } from "./AppStyles";
import Footer from "./components/Footer/Footer";
import AboutModal from "./components/Modal/AboutModal";
import AOS from "aos";
import "aos/dist/aos.css";

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      {!loading && (
        <AppWrap>
          <Navbar />
          {openModal && <AboutModal closeModal={setOpenModal} />}
          <Hero />

          <About handleClick={handleClick} />
          <Services />
          <Portfolio />
          <Testimonials />
          {/* <News /> */}
          <Contact />
          <Footer />
        </AppWrap>
      )}
    </>
  );
}

export default App;
