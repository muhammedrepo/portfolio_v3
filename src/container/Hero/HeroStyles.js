import styled from "styled-components";

export const HeroWrapper = styled.div`
  .coolzyte_tm_hero {
    width: 100%;
    height: 100vh;
    clear: both;
    float: left;
    position: relative;
  }

  .coolzyte_tm_hero .background {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

  .coolzyte_tm_hero .background .leftpart {
    width: 33%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .coolzyte_tm_hero .background .rightpart {
    width: 100%;
    height: 100%;
    float: left;
    padding-left: 33%;
  }
  .coolzyte_tm_hero .background .rightpart .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  /* Coolzyte Slider */

  .fn_cs_personal_slider {
    width: 100%;
    height: 100%;
    clear: both;
    float: left;
  }
  .fn_cs_personal_slider .main_image {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .fn_cs_personal_slider .swiper-container {
    cursor: none;
    overflow: hidden;
    height: 100%;
  }

  .fn_cs_personal_slider .swiper-slide {
    overflow: hidden;
  }

  /* Coolzyte Slider End */

  .coolzyte_tm_hero .background .rightpart .image {
    position: absolute;
    top: -20px;
    bottom: -20px;
    left: -20px;
    right: -20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .coolzyte_tm_hero .background .myOverlay {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 2;
    left: 0%;
    transition: left 0.7s ease;
  }
  .coolzyte_tm_hero .background .overlay_image {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    /*	background-color: rgba(255,255,255,.3);*/
    z-index: 1;
  }
  .coolzyte_tm_hero .background .myOverlay.dark {
    background-color: #000;
  }
  .coolzyte_tm_hero .background .myOverlay.loaded {
    left: 100%;
  }
  .coolzyte_tm_hero .content .container {
    height: 100%;
  }
  .coolzyte_tm_hero .content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
  }
  .coolzyte_tm_hero .content_inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .coolzyte_tm_hero .content_inner h3 {
    color: #000;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
    line-height: 1.1;
  }
  .coolzyte_tm_hero .content_inner h3.stroke {
    -webkit-text-stroke: 1px #000;
    color: transparent;
  }
  .coolzyte_tm_hero .content_inner span {
    font-family: "Poppins";
    font-weight: 600;
    display: inline-block;
    padding-top: 20px;
    font-style: italic;
  }

  .coolzyte_tm_down {
    position: absolute;
    z-index: 7;
    bottom: 50px;
  }

  .coolzyte_tm_down[data-position="left"] {
    left: 0px;
  }
  .coolzyte_tm_down[data-position="right"] {
    right: 0px;
  }
  .coolzyte_tm_down[data-position="center"] {
    left: 50%;
    transform: translateX(-50%);
  }
  .coolzyte_tm_down .line_wrapper {
    position: absolute;
    width: 1px;
    height: 100%;
    left: 0;
    right: 0;
    margin: 0px auto;
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    visibility: visible;

    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    -ms-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }
  .coolzyte_tm_down .line_wrapper {
    width: 1px;
    height: 50px;
    background: none;
    display: block;
  }
  .coolzyte_tm_down .line_wrapper:before {
    content: "";
    background-color: #000;
    width: 1px;
    height: 50%;
    display: block;
    top: 0;

    -webkit-animation: scroll-down 2s ease-in-out infinite;
    -ms-animation: scroll-down 2s ease-in-out infinite;
    animation: scroll-down 2s ease-in-out infinite;
  }

  @-webkit-keyframes scroll-down {
    0% {
      height: 0;
    }
    50% {
      height: 100%;
    }
    70% {
      height: 100%;
      transform: scaleY(0.5);
      transform-origin: bottom;
    }
    100% {
      height: 100%;
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
  .coolzyte_tm_down[data-skin="light"] .line_wrapper:before {
    background-color: #fff;
  }
  .coolzyte_tm_down .line_wrapper {
    position: absolute;
    width: 1px;
    height: 100%;
    left: 0;
    right: 0;
    margin: 0px auto;
    opacity: 1;
    filter: alpha(opacity=100);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    visibility: visible;

    -webkit-transition: all 0.7s;
    -moz-transition: all 0.7s;
    -ms-transition: all 0.7s;
    -o-transition: all 0.7s;
    transition: all 0.7s;
  }
  .coolzyte_tm_down .line_wrapper {
    width: 1px;
    height: 50px;
    background: none;
    display: block;
  }
  .coolzyte_tm_down .line_wrapper:before {
    content: "";
    background-color: #000;
    width: 1px;
    height: 50%;
    display: block;
    top: 0;

    -webkit-animation: scroll-down 2s ease-in-out infinite;
    -ms-animation: scroll-down 2s ease-in-out infinite;
    animation: scroll-down 2s ease-in-out infinite;
  }

  @-webkit-keyframes scroll-down {
    0% {
      height: 0;
    }
    50% {
      height: 100%;
    }
    70% {
      height: 100%;
      transform: scaleY(0.5);
      transform-origin: bottom;
    }
    100% {
      height: 100%;
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
  .coolzyte_tm_down[data-skin="light"] .line_wrapper:before {
    background-color: #fff;
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
    height: 100%;
    object-fit: cover;
  }
`;
