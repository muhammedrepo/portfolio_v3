import styled from "styled-components";

export const Wrapper = styled.div`
  .coolzyte_tm_news {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding: 205px 0px 100px 0px;
    background-color: #f8f9fa;
  }
  .coolzyte_tm_news .news_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding-top: 105px;
  }
  .coolzyte_tm_news .news_inner ul {
    margin: 0px 0px 0px -50px;
    list-style-type: none;
  }
  .coolzyte_tm_news .news_inner ul li {
    margin: 0px 0px 50px 0px;
    float: left;
    width: 33.3333%;
    padding-left: 50px;
  }
  .coolzyte_tm_news .news_inner ul li .list_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  }

  .coolzyte_tm_news ul li .image {
    position: relative;
    overflow: hidden;
  }
  .coolzyte_tm_news ul li .image img {
    min-width: 100%;
    opacity: 0;
  }
  .coolzyte_tm_news ul li .image .main {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_news ul li .list_inner .image:hover .main {
    transform: scale(1.1) translateZ(0);
  }
  .coolzyte_tm_news ul li .details {
    width: 100%;
    float: left;
    padding: 30px 40px 25px 40px;
    background-color: #fff;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_news ul li .details .title {
    margin-bottom: 10px;
    line-height: 1.4;
  }
  .coolzyte_tm_news ul li .details .title a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    display: inline-block;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_news ul li .details .title a:hover {
    color: #000;
  }
  .coolzyte_tm_news ul li .details .date {
    font-family: "Poppins";
    font-size: 13px;
    color: #767676;
    font-style: italic;
  }
  .coolzyte_tm_news ul li .details .date a {
    text-decoration: none;
    color: #767676;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_news ul li .details .date a:hover {
    color: #000;
  }
  .coolzyte_tm_news ul li .details .date span {
    position: relative;
  }
  .coolzyte_tm_news ul li .details .date span:before {
    position: relative;
    content: "/";
    font-size: 10px;
    padding: 0px 7px 0px 2px;
  }
  .coolzyte_tm_news ul li .extra {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    position: relative;
  }
  .coolzyte_tm_news ul li .extra:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    bottom: -7px;
  }
  .coolzyte_tm_modalbox_news .details .extra {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
  }
  .coolzyte_tm_modalbox_news .details .extra:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    bottom: -10px;
  }
  .coolzyte_tm_modalbox_news {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100vh;
    z-index: 15;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    visibility: hidden;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_modalbox_news.opened {
    opacity: 1;
    visibility: visible;
  }
  .coolzyte_tm_modalbox_news .container {
    height: 100vh;
  }
  .coolzyte_tm_modalbox_news .box_inner {
    position: absolute;
    top: 70px;
    bottom: 70px;
    width: 968px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    margin-top: -20px;
    transition-delay: 0.3s;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_modalbox_news.opened .box_inner {
    opacity: 1;
    visibility: visible;
    margin-top: 0px;
  }
  .coolzyte_tm_modalbox_news .close {
    position: fixed;
    left: 100%;
    top: 0px;
    margin-left: 40px;
    z-index: 111111;
  }
  .coolzyte_tm_modalbox_news .close a {
    text-decoration: none;
    color: #fff;
  }
  .coolzyte_tm_modalbox_news .close .svg {
    width: 50px;
    height: 50px;
  }
  .coolzyte_tm_modalbox_news .description_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    padding: 70px;
    overflow-y: scroll;
  }
  .coolzyte_tm_modalbox_news .details {
    width: 100%;
    float: left;
    margin-bottom: 20px;
  }
  .coolzyte_tm_modalbox_news .description_wrap .image {
    position: relative;
    max-height: 450px;
    z-index: -1;
    margin-bottom: 40px;
  }
  .coolzyte_tm_modalbox_news .description_wrap .image img {
    min-width: 100%;
    opacity: 0;
  }
  .coolzyte_tm_modalbox_news .description_wrap .image .main {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .coolzyte_tm_modalbox_news .details .title {
    font-weight: 600;
    font-size: 23px;
    margin-bottom: 9px;
  }
  .coolzyte_tm_modalbox_news .date {
    font-family: "Poppins";
    font-size: 13px;
    color: #767676;
    font-style: italic;
  }
  .coolzyte_tm_modalbox_news .date a {
    text-decoration: none;
    color: #767676;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_modalbox_news .date a:hover {
    color: #000;
  }
  .coolzyte_tm_modalbox_news .date span {
    position: relative;
    margin-left: 11px;
  }
  .coolzyte_tm_modalbox_news .date span:before {
    position: absolute;
    content: "";
    margin-top: 0px;
    top: 50%;
    transform: translateY(-50%) rotate(15deg);
    right: 100%;
    background-color: #939393;
    width: 1px;
    height: 9px;
    margin-right: 7px;
  }
  .coolzyte_tm_news .main_content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    z-index: -11;
    display: none;
  }
  body.modal {
    overflow-y: hidden;
  }
  .coolzyte_tm_modalbox_news .main_content {
    width: 100%;
    float: left;
  }
  .coolzyte_tm_modalbox_news .main_content .descriptions {
    width: 100%;
    float: left;
    margin-bottom: 15px;
  }
  .coolzyte_tm_modalbox_news .main_content .descriptions .bigger {
    color: #888;
    font-size: 20px;
    margin-bottom: 31px;
  }
  .coolzyte_tm_modalbox_news .main_content .descriptions p {
    margin-bottom: 22px;
  }
  .coolzyte_tm_modalbox_news .main_content .quotebox {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    padding-left: 70px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .coolzyte_tm_modalbox_news .main_content .quotebox p {
    font-size: 20px;
    font-style: italic;
    margin-bottom: 23px;
  }
  .coolzyte_tm_modalbox_news .main_content .icon {
    position: absolute;
    left: 0px;
    top: 10px;
  }
  .coolzyte_tm_modalbox_news .main_content .icon .svg {
    width: 40px;
    height: 40px;
    color: #000;
  }
  .coolzyte_tm_modalbox_news .news_share {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
  }
  .coolzyte_tm_modalbox_news .news_share span {
    font-family: "Poppins";
    font-weight: 600;
    font-style: italic;
    padding-right: 20px;
    color: #000;
  }
  .coolzyte_tm_modalbox_news .news_share ul {
    margin: 0px;
    list-style-type: none;
    position: relative;
    top: -2px;
  }
  .coolzyte_tm_modalbox_news .news_share ul li {
    margin: 0px 12px 0px 0px;
    display: inline-block;
  }
  .coolzyte_tm_modalbox_news .news_share ul li .svg {
    width: 15px;
    height: 15px;
  }
  .coolzyte_tm_modalbox_news .news_share ul li a {
    text-decoration: none;
    color: #000;
  }
`;
