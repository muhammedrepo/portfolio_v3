import styled from "styled-components";

export const HeroWrapper = styled.div`
  .muhats_hero {
    width: 100%;
    height: 100vh;
    clear: both;
    float: left;
    position: relative;
  }

  .muhats_hero .background {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }

  .muhats_hero .background .leftpart {
    width: 33%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .muhats_hero .background .rightpart {
    width: 100%;
    height: 100%;
    float: left;
    padding-left: 40%;
  }

  .muhats_hero .background .rightpart .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .muhats_hero .background .rightpart .image {
    position: absolute;
    top: -20px;
    bottom: -20px;
    left: -20px;
    right: -20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 3;
  }
  .muhats_hero .background .myOverlay {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 2;
    left: 0%;
    transition: left 0.7s ease;
  }
  .muhats_hero .background .overlay_image {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    /*	background-color: rgba(255,255,255,.3);*/
    z-index: 1;
  }
  .muhats_hero .background .myOverlay.dark {
    background-color: #000;
  }
  .muhats_hero .background .myOverlay.loaded {
    left: 100%;
  }
  .muhats_hero .content .container {
    height: 100%;
  }
  .muhats_hero .content {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 4;
  }
  .muhats_hero .content_inner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .muhats_hero .content_inner h3 {
    color: #000;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
    line-height: 1.1;
  }
  .muhats_hero .content_inner h3.stroke {
    -webkit-text-stroke: 1px #000;
    color: transparent;
  }
  .muhats_hero .content_inner span {
    font-family: "Poppins";
    font-weight: 600;
    display: inline-block;
    padding-top: 20px;
    font-style: italic;
  }

  @media (max-width: 1600px) {
    .muhats_hero .content_inner h3 {
      font-size: 80px;
    }
  }

  @media (max-width: 1200px) {
    .muhats_hero .background .leftpart {
      width: 0%;
    }
    .muhats_hero .background .rightpart {
      padding-left: 0px;
    }
  }

  @media (max-width: 1040px) {
    .muhats_hero .content_inner h3 {
      font-size: 60px;
    }
  }
  @media (max-width: 768px) {
    .muhats_hero .content_inner h3 {
      font-size: 50px;
    }
  }
`;
