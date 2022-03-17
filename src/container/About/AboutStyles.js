import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-bottom: 193px;
  padding-top: 230px;

  .about_inner {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
  }
  .about_inner .left {
    width: 40%;
  }
  .about_inner .left img {
    min-width: 10%;
  }
  .about_inner .right {
    width: 60%;
    padding-left: 80px;
  }
  .name {
    width: 100%;
    float: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 35px;
    margin-bottom: 32px;
  }
  .name h3 {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 35px;
    position: relative;
    color: #000;
  }
  .name h3 .bg {
    position: absolute;
    left: 0px;
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
  .name span {
    font-family: "Poppins";
    font-weight: 600;
    display: inline-block;
    padding-top: 10px;
  }
  span.job {
    font-style: italic;
  }
  .right .text {
    width: 100%;
    float: left;
    margin-bottom: 23px;
  }
  .right .text p {
    margin-bottom: 13px;
    font-style: italic;
  }
  .waxon_tm_button {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .waxon_tm_button a {
    text-decoration: none;
    color: #fff;
    background-color: #000;
    padding: 13px 50px;
    display: inline-block;
    border: 2px solid #000;
    font-style: italic;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .waxon_tm_button a:hover {
    background-color: transparent;
    color: #000;
  }
  .waxon_tm_button[data-position="left"] {
    text-align: left;
  }
  .waxon_tm_button[data-position="center"] {
    text-align: center;
  }
  .waxon_tm_button[data-position="right"] {
    text-align: right;
  }
  .waxon_tm_modalbox_about {
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
  .waxon_tm_modalbox_about.opened {
    opacity: 1;
    visibility: visible;
  }
  .waxon_tm_modalbox_about .container {
    height: 100vh;
  }
  .waxon_tm_modalbox_about .box_inner {
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
  .waxon_tm_modalbox_about.opened .box_inner {
    opacity: 1;
    visibility: visible;
    margin-top: 0px;
  }
  .waxon_tm_modalbox_about .close {
    position: fixed;
    left: 100%;
    top: 0px;
    margin-left: 40px;
    z-index: 111111;
  }
  .waxon_tm_modalbox_about .close a {
    text-decoration: none;
    color: #fff;
  }
  .waxon_tm_modalbox_about .close .svg {
    width: 50px;
    height: 50px;
  }
  .waxon_tm_modalbox_about .description_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    padding: 90px 70px 75px 70px;
    overflow-y: scroll;
  }
  .waxon_tm_modalbox_about .my_box {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    margin-bottom: 92px;
  }
  .waxon_tm_modalbox_about .my_box .left {
    width: 50%;
    padding-right: 50px;
  }
  .waxon_tm_modalbox_about .about_title h3 {
    font-weight: 700;
    color: #000;
    font-size: 20px;
  }
  .waxon_progress {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding-top: 33px;
  }
  .progress_inner {
    width: 100%;
    margin-bottom: 17px;
  }
  .progress_inner:last-child {
    margin-bottom: 0px;
  }
  .progress_inner > span {
    margin: 0px 0px 5px 0px;
    width: 100%;
    display: block;
    text-align: left;
    color: #000;
    font-style: italic;
  }
  .progress_inner span.number {
    float: right;
  }
  .progress_inner .background {
    background: rgba(0, 0, 0, 0.09);
    width: 100%;
    min-width: 100%;
    position: relative;
    height: 3px;
  }
  .progress_inner .background .bar_in {
    height: 100%;
    background: #000;
    width: 0px;
    overflow: hidden;
  }
  .progress_inner .background .bar {
    width: 0px;
    height: 100%;
  }
  .progress_inner .background .bar.open {
    -webkit-animation: wow 2s cubic-bezier(0.165, 0.84, 0.44, 1); /* Safari 4+ */
    -moz-animation: wow 2s cubic-bezier(0.165, 0.84, 0.44, 1); /* Fx 5+ */
    animation: wow 2s cubic-bezier(0.165, 0.84, 0.44, 1); /* IE 10+ */
    width: 100%;
  }

  @-webkit-keyframes wow {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @-moz-keyframes wow {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes wow {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .waxon_tm_modalbox_about .my_box .right {
    width: 50%;
    padding-left: 50px;
  }
  .waxon_tm_modalbox_about .counter {
    width: 100%;
    float: left;
    clear: both;
  }
  .waxon_tm_modalbox_about .counter ul {
    margin: 0px 0px 42px -50px;
    list-style-type: none;
    padding-top: 45px;
    display: flex;
    flex-wrap: wrap;
  }
  .waxon_tm_modalbox_about .counter ul li {
    margin: 0px 0px 50px 0px;
    width: 33.3333%;
    float: left;
    padding-left: 50px;
  }
  .waxon_tm_modalbox_about .list_inner {
    width: 100%;
    height: 100%;
    clear: both;
    float: left;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 40px 20px;
  }
  .waxon_tm_modalbox_about .counter ul li h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 3px;
  }
  .waxon_tm_modalbox_about .counter ul li span {
    font-style: italic;
  }
  .waxon_tm_modalbox_about .partners {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .waxon_tm_modalbox_about .partners ul {
    margin: 0px;
    list-style-type: none;
    padding-top: 15px;
  }
  .waxon_tm_modalbox_about .partners ul li {
    margin: 0px;
    opacity: 0.5;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .waxon_tm_modalbox_about .partners ul li:hover {
    opacity: 1;
  }
`;
