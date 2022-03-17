import { images } from "../../constants";

const Logo = () => {
  return (
    <div className="">
      <a href="#href">
        <img style={{ maxWidth: "120px" }} src={images.logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;