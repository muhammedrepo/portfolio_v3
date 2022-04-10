import { useState, useEffect } from "react";
import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  News,
} from "./container";

import { Navbar, Loading } from "./components";
import { AppWrap } from "./AppStyles";
import Footer from "./components/Footer/Footer";
import AboutModal from "./components/Modal/AboutModal";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // });
  // if (isLoading) return <Loading />;
  return (
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
  );
}

export default App;
