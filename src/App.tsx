import {
  Hero,
  About,
  Services,
  Portfolio,
  Testimonials,
  Contact,
} from "./container";

import { AppWrap } from "./AppStyles";

function App() {
  return (
    <AppWrap>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </AppWrap>
  );
}

export default App;
