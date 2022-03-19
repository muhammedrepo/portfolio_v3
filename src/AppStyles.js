import styled from "styled-components";

export const AppWrap = styled.div`
  .coolzyte_tm_all_wrap {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    overflow: hidden;
  }
  .coolzyte_tm_all_wrap,
  .coolzyte_tm_all_wrap * {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  /*---------------------------------------------------*/
  /*	16) coolzyte MEDIA QUERIES (FOR SMALL DEVICES)
/*---------------------------------------------------*/

  @media (max-width: 1600px) {
    .container {
      max-width: 1120px;
    }
    .coolzyte_tm_hero .content_inner h3 {
      font-size: 80px;
    }
    .coolzyte_tm_news ul li .details .title a {
      font-size: 17px;
    }
    .coolzyte_tm_news ul li .details {
      padding: 30px 30px 25px 30px;
    }
  }

  @media (max-width: 1200px) {
    .coolzyte_tm_hero .background .leftpart {
      width: 0%;
    }
    .coolzyte_tm_hero .background .rightpart {
      padding-left: 0px;
    }
    .coolzyte_tm_modalbox_news .box_inner {
      width: 100%;
      top: 0px;
      bottom: 0px;
    }
    .coolzyte_tm_modalbox_news .close a {
      color: #000;
    }
    .coolzyte_tm_modalbox_news .close {
      left: auto;
      right: 5px;
      top: 25px;
    }
    .coolzyte_tm_modalbox_news .close .svg {
      width: 25px;
      height: 25px;
    }
    .coolzyte_tm_modalbox_about .box_inner {
      width: 100%;
      top: 0px;
      bottom: 0px;
    }
    .coolzyte_tm_modalbox_about .close a {
      color: #000;
    }
    .coolzyte_tm_modalbox_about .close {
      left: auto;
      right: 5px;
      top: 25px;
    }
    .coolzyte_tm_modalbox_about .close .svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 1040px) {
    .coolzyte_tm_preloader {
      display: none;
    }
    .coolzyte_tm_topbar {
      display: none;
    }
    .coolzyte_tm_mobile_menu {
      display: block;
    }
    .coolzyte_tm_hero .content_inner h3 {
      font-size: 60px;
    }
    .coolzyte_tm_main_title .title h3 .bg {
      display: none;
    }
    .coolzyte_tm_about .name h3 .bg {
      display: none;
    }
    .coolzyte_tm_about .about_inner {
      flex-direction: column;
      align-items: baseline;
    }
    .coolzyte_tm_about .about_inner .left {
      width: 100%;
      margin-bottom: 50px;
    }
    .coolzyte_tm_about .about_inner .left .image .myDot {
      display: none;
    }
    .coolzyte_tm_about .about_inner .right {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_about .name h3 {
      font-size: 30px;
    }
    .coolzyte_tm_main_title .title h3 {
      font-size: 30px;
    }
    .coolzyte_tm_main_title {
      display: block;
    }
    .coolzyte_tm_portoflio .portfolio_filter {
      display: block;
    }
    .coolzyte_tm_portoflio .portfolio_filter .wrapper {
      display: none;
    }
    .coolzyte_tm_portoflio .portfolio_filter ul li {
      left: 0px;
      opacity: 1;
      visibility: visible;
    }
    .coolzyte_tm_portoflio .portfolio_filter ul {
      padding-right: 0px;
      padding-top: 40px;
    }
    .coolzyte_tm_portoflio .portfolio_inner {
      padding-top: 30px;
    }
    .coolzyte_tm_portoflio .portfolio_inner ul li {
      width: 50%;
    }
    .coolzyte_tm_testimonials .testi_inner {
      flex-direction: column;
      align-items: baseline;
    }
    .coolzyte_tm_testimonials .testi_inner .right {
      display: none;
    }
    .coolzyte_tm_testimonials .quote_list ul {
      flex-direction: column;
    }
    .coolzyte_tm_testimonials .quote_list ul li {
      margin-bottom: 50px;
    }
    .coolzyte_tm_testimonials .quote_list ul li:last-child {
      margin-bottom: 0px;
    }
    .coolzyte_tm_testimonials .quote_list ul li .svg {
      opacity: 1;
      margin-bottom: 15px;
    }
    .coolzyte_tm_testimonials .quote_list ul li .text {
      opacity: 1;
      visibility: visible;
    }
    .coolzyte_tm_testimonials .details .main {
      opacity: 1;
      transform: scale(1);
    }
    .coolzyte_tm_testimonials .short .author span,
    .coolzyte_tm_testimonials .short .job span {
      transform: translateY(0);
    }
    .coolzyte_tm_testimonials .testi_inner .left {
      padding-right: 0px;
      width: 100%;
      margin-bottom: 40px;
    }
    .coolzyte_tm_testimonials .testi_inner .right .image_list ul {
      margin-left: -30px;
    }
    .coolzyte_tm_testimonials .testi_inner .right .image_list ul li {
      padding-left: 30px;
      margin-bottom: 30px;
    }
    .coolzyte_tm_testimonials .quote_list ul li {
      position: relative;
    }
    .coolzyte_tm_news .news_inner ul li {
      width: 50%;
    }
    .coolzyte_tm_contact .desc {
      max-width: 100%;
    }
    .coolzyte_tm_contact .contact_inner .wrapper {
      flex-direction: column;
      align-items: baseline;
    }
    .coolzyte_tm_contact .contact_inner .left {
      width: 100%;
      padding-right: 0px;
      margin-bottom: 40px;
    }
    .coolzyte_tm_contact .right {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_copyright .copyright_inner > ul > li {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_copyright .copyright_inner > ul {
      display: block;
      margin: 0px;
    }
    .coolzyte_tm_modalbox_news .description_wrap {
      padding: 40px;
    }
    .coolzyte_tm_modalbox_about .description_wrap {
      padding: 40px;
    }
    .coolzyte_tm_modalbox_about .my_box {
      flex-direction: column;
    }
    .coolzyte_tm_modalbox_about .my_box .left {
      width: 100%;
      padding-right: 0px;
      margin-bottom: 50px;
    }
    .coolzyte_tm_modalbox_about .my_box .right {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_portoflio {
      padding-top: 140px;
      margin-bottom: 140px;
    }
    .coolzyte_tm_news {
      padding-top: 140px;
    }
    .coolzyte_tm_contact {
      padding-top: 140px;
    }
    .mouse-cursor {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .coolzyte_tm_hero .content_inner h3 {
      font-size: 50px;
    }
    .coolzyte_tm_service ul li .svg {
      position: relative;
      margin-bottom: 20px;
    }
    .coolzyte_tm_service ul li .details {
      padding-left: 0px;
    }
    .coolzyte_tm_portoflio .portfolio_inner ul {
      margin: 0px;
    }
    .coolzyte_tm_portoflio .portfolio_inner ul li {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_testimonials .testi_inner .right .image_list ul {
      margin-left: -20px;
    }
    .coolzyte_tm_testimonials .testi_inner .right .image_list ul li {
      padding-left: 20px;
      margin-bottom: 20px;
    }
    .coolzyte_tm_news .news_inner ul {
      margin-left: 0px;
    }
    .coolzyte_tm_news .news_inner ul li {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_modalbox_news .main_content .icon {
      position: relative;
      margin-bottom: 30px;
    }
    .coolzyte_tm_modalbox_news .main_content .quotebox {
      padding-left: 0px;
    }
    .coolzyte_tm_modalbox_news .details .title {
      font-size: 21px;
    }
    .coolzyte_tm_modalbox_about .counter ul {
      margin: 0px;
    }
    .coolzyte_tm_modalbox_about .counter ul li {
      width: 100%;
      padding-left: 0px;
    }
  }
`;
