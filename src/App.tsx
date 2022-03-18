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

function App() {
  return (
    <AppWrap>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      {/*<Testimonials />
      <Contact /> */}
    </AppWrap>
  );
}

export default App;
