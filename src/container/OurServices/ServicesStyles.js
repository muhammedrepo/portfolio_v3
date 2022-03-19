import styled from "styled-components";

export const ServicesWrapper = styled.div`
  .coolzyte_tm_service {
    margin-bottom: 140px;
  }
  .coolzyte_tm_service,
  .coolzyte_tm_service .service_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }

  .coolzyte_tm_service .item {
    margin: 0px;
  }
  .list_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
  }
  .coolzyte_tm_service .item .svg {
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
  .coolzyte_tm_service .item .details {
    padding-left: 75px;
    text-align: left;
  }
  .coolzyte_tm_service .item .details h3 {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .coolzyte_tm_service .item .details p {
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

  @media (max-width: 640px) {
    .list_inner {
      display: flex;
      flex-direction: column;
    }

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
