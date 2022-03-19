import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  .coolzyte_tm_testimonials {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    margin-bottom: 100px;
  }
  .coolzyte_tm_main_title {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title h3 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 35px;
    position: relative;
  }
  .coolzyte_tm_main_title .title h3 .bg {
    position: absolute;
    left: -6px;
    top: 0px;
    font-family: "Poppins";
    color: transparent;
    font-size: 150px;
    font-weight: 900;
    opacity: 0.1;
    line-height: 0;
    -webkit-text-stroke: 1px #000;
    -webkit-user-select: none;
  }
  .coolzyte_tm_testimonials .testi_inner {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    padding-top: 105px;
  }
  .coolzyte_tm_testimonials .testi_inner .left {
    width: 50%;
    padding-right: 50px;
  }
  .coolzyte_tm_testimonials .quote_list {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .coolzyte_tm_testimonials .quote_list ul {
    margin: 0px;
    list-style-type: none;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .coolzyte_tm_testimonials .quote_list ul li {
    position: absolute;
    margin: 0px;
    width: 100%;
  }
  .coolzyte_tm_testimonials .quote_list ul li .svg {
    width: 50px;
    height: 50px;
    color: #000;
    margin-bottom: 30px;
    opacity: 0;
  }
  .coolzyte_tm_testimonials .quote_list ul li.active .svg {
    opacity: 1;
  }
  .coolzyte_tm_testimonials .quote_list ul li .text {
    opacity: 0;
    visibility: hidden;
    font-style: italic;

    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .coolzyte_tm_testimonials .quote_list ul li.active .text {
    opacity: 1;
    visibility: visible;
  }
  .coolzyte_tm_testimonials .details {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .coolzyte_tm_testimonials .details .image {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
  }
  .coolzyte_tm_testimonials .details .main {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    opacity: 0;

    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;

    transform: scale(1.5) translateZ(0);
  }
  .coolzyte_tm_testimonials .quote_list ul li.active .details .main {
    opacity: 1;
    transition: all 1s 0.3s ease;
    transform: scale(1) translateZ(0);
  }
  .coolzyte_tm_testimonials .short {
    padding-left: 25px;
  }
  .coolzyte_tm_testimonials .short h3 {
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    line-height: 1;
    position: relative;
  }
  .coolzyte_tm_testimonials .short .author {
    font-family: "Poppins";
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .coolzyte_tm_testimonials .short .job {
    font-family: "Mulish";
    font-size: 15px;
    color: #767676;
    font-weight: 400;
    display: block;
    font-style: italic;
  }
  .coolzyte_tm_testimonials .short .author span,
  .coolzyte_tm_testimonials .short .job span {
    position: relative;
    display: block;
    padding: 2px 0px;
    transform: translateY(102%);

    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .coolzyte_tm_testimonials .quote_list ul li.active .short .author span {
    transform: translateY(0px);
    transition-delay: 0.3s;
  }
  .coolzyte_tm_testimonials .quote_list ul li.active .short .job span {
    transform: translateY(0px);
    transition-delay: 0.6s;
  }
  .coolzyte_tm_testimonials .testi_inner .right {
    width: 50%;
    padding-left: 50px;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list ul {
    margin: 0px 0px 0px -50px;
    list-style-type: none;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list ul li {
    margin: 0px 0px 50px 0px;
    float: left;
    width: 50%;
    padding-left: 50px;
    opacity: 0.5;
    cursor: pointer;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list ul li.active {
    opacity: 1;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list ul li .image {
    position: relative;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list ul li .image img {
    min-width: 100%;
    opacity: 0;
  }
  .coolzyte_tm_testimonials .testi_inner .right .image_list ul li .image .main {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
