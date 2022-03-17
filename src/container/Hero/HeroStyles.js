import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  clear: both;
  float: left;
  position: relative;

  .background {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .background .leftpart {
    width: 33%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .background .rightpart {
    width: 100%;
    height: 100%;
    float: left;
    padding-left: 33%;
  }
  .background .rightpart .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .background .rightpart .image {
    position: absolute;
    top: -20px;
    bottom: -20px;
    left: -20px;
    right: -20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .background .myOverlay {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 2;
    left: 0%;
    transition: left 0.7s ease;
  }
  .background .overlay_image {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    /*	background-color: rgba(255,255,255,.3);*/
    z-index: 1;
  }
  .background .myOverlay.dark {
    background-color: #000;
  }
  .background .myOverlay.loaded {
    left: 100%;
  }
  .content .container {
    height: 100%;
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
  }
  .content_inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .content_inner h3 {
    color: #000;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
    line-height: 1.1;
  }
  .content_inner h3.stroke {
    -webkit-text-stroke: 1px #000;
    color: transparent;
  }
  .content_inner span {
    font-family: "Poppins";
    font-weight: 600;
    display: inline-block;
    padding-top: 20px;
    font-style: italic;
  }

  .swiper {
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
