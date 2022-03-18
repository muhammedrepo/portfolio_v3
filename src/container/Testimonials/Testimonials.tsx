import { TestimonialsWrapper } from "./TestimonialsStyles";

const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <div className="coolzyte_tm_testimonials">
        <div className="container">
          <div className="coolzyte_tm_main_title">
            <div className="title">
              <h3>
                What Clients Say<span className="bg">Testimonial</span>
              </h3>
            </div>
          </div>
          <div className="testi_inner">
            <div className="left">
              <div className="quote_list">
                <ul>
                  <li className="active">
                    <img className="svg" src="img/svg/quote-1.svg" alt="" />
                    <p className="text">
                      Good overall template. I am getting back into coding and
                      had a simple question for the author. They responded
                      within 30 minutes and answered my question. Highly
                      recommend.
                    </p>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url="img/about/1.jpg"
                        ></div>
                      </div>
                      <div className="short">
                        <h3 className="author">
                          <span>Nelly Furtado</span>
                        </h3>
                        <h3 className="job">
                          <span>App Developer</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img className="svg" src="img/svg/quote-1.svg" alt="" />
                    <p className="text">
                      I can't believe I got support and my problem resolved in
                      just minutes from posting my question. Simply amazing team
                      and amazing theme! Thank you very much guys for excellent
                      support!
                    </p>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url="img/about/2.jpg"
                        ></div>
                      </div>
                      <div className="short">
                        <h3 className="author">
                          <span>Brian Ederson</span>
                        </h3>
                        <h3 className="job">
                          <span>Web Designer</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img className="svg" src="img/svg/quote-1.svg" alt="" />
                    <p className="text">
                      Awesome template, well written code and looks great on any
                      platform. The customer support is very helpful and as huge
                      asset to this template. Overall a good design, that I am
                      quite happy with.
                    </p>
                    <div className="details">
                      <div className="image">
                        <div
                          className="main"
                          data-img-url="img/about/3.jpg"
                        ></div>
                      </div>
                      <div className="short">
                        <h3 className="author">
                          <span>Steve Collins</span>
                        </h3>
                        <h3 className="job">
                          <span>Artel Corp.</span>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image_list">
                <ul className="masonry">
                  <li className="active masonry_item">
                    <div className="image">
                      <img src="img/thumbs/3-4.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/about/1.jpg"
                      ></div>
                    </div>
                  </li>
                  <li className="masonry_item">
                    <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/about/2.jpg"
                      ></div>
                    </div>
                  </li>
                  <li className="masonry_item">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/about/3.jpg"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
