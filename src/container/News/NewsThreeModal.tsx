import images from "../../constants/images";

const NewsThreeModal = () => {
  return (
    <li
      className="wow fadeInDown"
      data-wow-duration="0.8s"
      data-wow-delay="0.4s"
    >
      <div className="list_inner">
        <div className="image">
          <img src={images.thumb1} alt="" />
          <div className="main">
            <img src={images.news3} alt="" />
          </div>
          <a className="full_link" href="#"></a>
        </div>
        <div className="details">
          <div className="extra">
            <p className="date">
              By <a href="#">Ave Smith</a> <span>22 March 2021</span>
            </p>
          </div>
          <h3 className="title">
            <a href="#">How designers and developers can collaborate better</a>
          </h3>
        </div>
        <div className="main_content">
          <div className="descriptions">
            <p className="bigger">
              Just because we can't get out and about like we normally would,
              doesn’t mean we have to stop taking pictures. There’s still plenty
              you can do, provided you're prepared to use some imagination. Here
              are a few ideas to keep you shooting until normal life resumes.
            </p>
            <p>
              Most photographers love to shoot the unusual, and you don’t get
              much more unusual than These Unprecedented Times. Right now
              everything counts as out of the ordinary. There are a number of
              remarkable things about these lockdown days that are worth
              photographing now so we can remember them when it is all over.
            </p>
            <p>
              Streets empty that are usually busy are remarkable and can evoke
              the sense of historical pictures from before the invention of the
              motorcar. Other things that are different at the moment will be
              queues to get into stores and the lines marked out on the floor to
              show how far apart we should be.
            </p>
            <div className="quotebox">
              <div className="icon">
                <img className="svg" src={images.quote1} alt="" />
              </div>
              <p>
                Most photographers find it hard to see interesting pictures in
                places in which they are most familiar. A trip somewhere new
                seems always exactly what our photography needed, as shooting
                away from home consistently inspires us to new artistic heights.
              </p>
            </div>
            <p>
              Pretend everything is new and that you haven’t seen it before, and
              then you will be free to notice the leading lines, the places
              where one edge meets another in delightful geometric harmony, and
              how the ordinary things in the kitchen are transformed when the
              light is on or off.
            </p>
            <p>
              The trick here is to look slowly, and then look again. Take the
              time to look in detail and to look at the same thing from
              different angles, with different light, long lenses and wide
              lenses. Then move to the left a bit. You may never feel the need
              to leave the house again.
            </p>
          </div>
          <div className="news_share">
            <span>Share:</span>
            <ul>
              <li>
                <a href="#">
                  <img className="svg" src={images.facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="svg" src={images.twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="svg" src={images.instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="svg" src={images.dribble} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="svg" src={images.tiktok} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsThreeModal;
