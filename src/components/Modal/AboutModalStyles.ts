import styled from "styled-components";

export const ModalAbout = styled.div`
  .modalbox_about {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100vh;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .modalbox_about .container {
    height: 100vh;
  }
  .modalbox_about .box_inner {
    position: absolute;
    top: 70px;
    bottom: 70px;
    width: 968px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    margin-top: -20px;
    transition-delay: 0.3s;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .modalbox_about.opened .box_inner {
    opacity: 1;
    visibility: visible;
    margin-top: 0px;
  }
  .modalbox_about .close {
    position: fixed;
    left: 100%;
    top: 0px;
    margin-left: 40px;
    z-index: 111111;
  }
  .modalbox_about .close button {
    text-decoration: none;
    color: #fff;
  }
  .modalbox_about .close .svg {
    width: 50px;
    height: 50px;
  }
  .modalbox_about .description_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    padding: 90px 70px 75px 70px;
    overflow-y: scroll;
  }
  .modalbox_about .my_box {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    margin-bottom: 92px;
  }
  .modalbox_about .my_box .left {
    width: 50%;
    padding-right: 50px;
  }
  .modalbox_about .about_title h3 {
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

  .modalbox_about .my_box .right {
    width: 50%;
    padding-left: 50px;
  }
  .modalbox_about .counter {
    width: 100%;
    float: left;
    clear: both;
  }
  .modalbox_about .counter ul {
    margin: 0px 0px 42px -50px;
    list-style-type: none;
    padding-top: 45px;
    display: flex;
    flex-wrap: wrap;
  }
  .modalbox_about .counter ul li {
    margin: 0px 0px 50px 0px;
    width: 33.3333%;
    float: left;
    padding-left: 50px;
  }
  .modalbox_about .list_inner {
    width: 100%;
    height: 100%;
    clear: both;
    float: left;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 40px 20px;
  }
  .modalbox_about .counter ul li h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 3px;
  }
  .modalbox_about .counter ul li span {
    font-style: italic;
  }

  .partners_logo {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      width: 169.5px;
    }

    .item img {
      width: auto;
    }
  }

  @media (max-width: 1200px) {
    .modalbox_about .box_inner {
      width: 100%;
      top: 0px;
      bottom: 0px;
    }
    .modalbox_about .close button {
      color: #000;
    }
    .modalbox_about .close {
      left: auto;
      right: 5px;
      top: 25px;
    }
    .modalbox_about .close .svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 1040px) {
    .modalbox_about .description_wrap {
      padding: 40px;
    }
    .modalbox_about .my_box {
      flex-direction: column;
    }
    .modalbox_about .my_box .left {
      width: 100%;
      padding-right: 0px;
      margin-bottom: 50px;
    }
    .modalbox_about .my_box .right {
      width: 100%;
      padding-left: 0px;
    }
  }
  @media (max-width: 768px) {
    .modalbox_about .counter ul {
      margin: 0px;
    }
    .modalbox_about .counter ul li {
      width: 100%;
      padding-left: 0px;
    }
  }
`;
