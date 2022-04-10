import Spinner from "../../assets/spinner.gif";

const Loading = () => {
  return (
    <div className="preloader">
      <div className="spinner_wrap">
        <div className="spinner">
          <img src={Spinner} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
