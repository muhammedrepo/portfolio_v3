import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  .coolzyte_tm_portoflio {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    margin-bottom: 200px;
    padding: 205px 0px 100px 0px;
    background-color: #f8f9fa;
  }
  .coolzyte_tm_portoflio .portfolio_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding-top: 105px;
  }
  .coolzyte_tm_main_title {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .coolzyte_tm_main_title .title h3 {
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
  .coolzyte_tm_portoflio .portfolio_filter {
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
  }
  .coolzyte_tm_portoflio .portfolio_filter ul {
    margin: 0px;
    list-style-type: none;
    padding-right: 50px;
    position: relative;
    top: 3px;
  }
  /* .coolzyte_tm_portoflio .portfolio_filter ul li {
    margin: 0px 30px 0px 0px;
    display: inline-block;
    opacity: 0;
    visibility: hidden;
    left: 10px;
    position: relative;

    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  } */
  /* .coolzyte_tm_portoflio .portfolio_filter ul li.opened {
    opacity: 1;
    visibility: visible;
    left: 0px;
  } */
  .coolzyte_tm_portoflio .portfolio_filter ul li:last-child {
    margin-right: 0px;
  }
  .coolzyte_tm_portoflio .portfolio_filter ul li a {
    text-decoration: none;
    color: #000;
    font-family: "Poppins";
    font-weight: 600;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  .coolzyte_tm_portoflio .portfolio_filter ul li a.current {
    color: #000;
  }
  .coolzyte_tm_portoflio .portfolio_filter ul li a .first {
    position: absolute;
    transform: translateY(100%);

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_portoflio .portfolio_filter ul li a .second {
    position: relative;
    display: block;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_portoflio .portfolio_filter ul li a:hover .first {
    transform: translateY(0);
  }
  .coolzyte_tm_portoflio .portfolio_filter ul li a:hover .second {
    transform: translateY(-100%);
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper {
    width: 30px;
    height: 17px;
    position: relative;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper a {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper .trigger {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #000;
    top: 50%;
    transform: translateY(-50%);
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper .trigger:before {
    position: absolute;
    content: "";
    width: 15px;
    height: 3px;
    background-color: #000;
    left: 0px;
    top: -7px;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper .trigger:after {
    position: absolute;
    content: "";
    width: 15px;
    height: 3px;
    background-color: #000;
    right: 0px;
    bottom: -7px;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper a:hover .trigger:before {
    left: 14px;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper a:hover .trigger:after {
    right: 14px;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper a.opened .trigger:before {
    left: 14px;
  }
  .coolzyte_tm_portoflio .portfolio_filter .wrapper a.opened .trigger:after {
    right: 14px;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul {
    margin: 0px 0px 0px -50px;
    list-style-type: none;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li {
    margin: 0px 0px 40px 0px;
    float: left;
    width: 33.3333%;
    padding-left: 50px;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .list_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    overflow: hidden;
  }
  .coolzyte_tm_portoflio .overlay {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.7);
    opacity: 0;
    visibility: hidden;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_portoflio .overlay .myimage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 150px !important;
    min-width: 150px !important;
    z-index: 1;
  }
  .coolzyte_tm_portoflio
    .portfolio_inner
    ul
    li
    .list_inner
    .image:hover
    .overlay {
    opacity: 1;
    visibility: visible;
  }
  .full_link {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 4;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .list_inner .image {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .list_inner .image img {
    min-width: 100%;
    opacity: 0;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .list_inner .image .main {
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
  .coolzyte_tm_portoflio .portfolio_inner ul li .list_inner .image:hover .main {
    transform: scale(1.1) translateZ(0);
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .title h3 {
    margin-bottom: 2px;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .title h3 a {
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #000;
    text-decoration: none;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_portoflio .portfolio_inner ul li .title span a {
    text-decoration: none;
    color: #767676;
    position: relative;
    display: inline-block;
    font-style: italic;
  }
`;
