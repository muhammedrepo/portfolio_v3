import styled from "styled-components";

export const ServicesWrapper = styled.div`
  margin-bottom: 140px;

  .service_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .item {
    margin: 0px;

    cursor: e-resize;
  }
  .item-link {
    margin: 0px;
  }
  .item-link .list_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
  }
  .item-link .svg {
    position: absolute;
    left: 0px;
    top: 5px;
    width: 50px;
    height: 50px;
    color: #000;

    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  .item-link .details {
    padding-left: 75px;
  }
  .item-link .details h3 {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .item-link .details p {
    font-style: italic;
  }

  .swiper {
    width: 100%;
    height: 100%;
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
    width: 10%;
    height: 100%;
    object-fit: cover;
  }
`;
