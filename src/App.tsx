import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  News,
} from "./container";

import { Navbar } from "./components";
import { AppWrap } from "./AppStyles";

function App() {
  return (
    <AppWrap>
      <div className="coolzyte_tm_all_wrap">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <News />
        <Contact />
      </div>
    </AppWrap>
  );
}

export default App;
