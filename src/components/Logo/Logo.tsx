import { images } from "../../constants";

const Logo = () => {
  return (
    <div>
      <a href="#home">
        <img src={images.logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
