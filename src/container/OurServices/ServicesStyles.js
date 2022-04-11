import styled from "styled-components";

export const ServicesWrapper = styled.div`
  .coolzyte_tm_service .item .svg {
    position: absolute;
    left: 0px;
    top: 5px;
    width: 50px;
    height: 50px;
    color: #000;
    transition: all 0.4s ease;
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

  @media (max-width: 640px) {
    .coolzyte_tm_service .item .details {
      margin-top: 20px;
      padding-left: 0px;
    }
    .coolzyte_tm_service .item .svg {
      position: relative;
      top: 0;
    }
  }
`;
