import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  margin-bottom: 200px;
  padding: 205px 0px 100px 0px;
  background-color: #f8f9fa;

  .portfolio_inner {
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

  .coolzyte_tm_portoflio .portfolio_filter ul li {
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
  }
`;
