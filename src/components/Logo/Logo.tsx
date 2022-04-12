import { images } from "../../constants";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <div>
      <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
        <img src={images.logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
