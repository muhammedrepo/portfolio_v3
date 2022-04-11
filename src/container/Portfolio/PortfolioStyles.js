import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  .portoflio {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    margin-bottom: 200px;
    padding: 205px 0px 100px 0px;
    background-color: #f8f9fa;
  }

  .portfolio_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding-top: 105px;

    @media (max-width: 1040px) {
      padding-top: 60px;
    }
  }

  .main_title {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .portfolio_filter {
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
  }
  .portfolio_filter ul {
    margin: 0px;
    list-style-type: none;
    padding-right: 50px;
    position: relative;
    top: 3px;
  }
  .portfolio_filter ul li {
    margin: 0px 30px 0px 0px;
    display: inline-block;
    opacity: 1;
    left: 10px;
    position: relative;

    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .portfolio_filter ul li:last-child {
    margin-right: 0px;
  }
  .portfolio_filter ul li button {
    text-decoration: none;
    color: #000;
    font-family: "Poppins";
    font-weight: 600;
    position: relative;
    overflow: hidden;
    display: inline-block;
    text-transform: capitalize;
    cursor: pointer;
  }
  .portfolio_filter ul li button.current {
    color: #000;
  }
  .portfolio_filter ul li button .first {
    position: absolute;
    transform: translateY(100%);

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  /* .portfolio_filter ul li button .second {
    position: relative;
    display: block;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  } */
  .portfolio_filter ul li button:hover .first {
    transform: translateY(0);
  }
  .portfolio_filter ul li button:hover .second {
    transform: translateY(-100%);
  }
  .portfolio_filter .wrapper {
    width: 30px;
    height: 17px;
    position: relative;
  }
  .portfolio_filter .wrapper button {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
  }
  .portfolio_filter .wrapper .trigger {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #000;
    top: 50%;
    transform: translateY(-50%);
  }
  .portfolio_filter .wrapper .trigger:before {
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
  .portfolio_filter .wrapper .trigger:after {
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
  .portfolio_filter .wrapper button:hover .trigger:before {
    left: 14px;
  }
  .portfolio_filter .wrapper button:hover .trigger:after {
    right: 14px;
  }
  .portfolio_filter .wrapper button.opened .trigger:before {
    left: 14px;
  }
  .portfolio_filter .wrapper button.opened .trigger:after {
    right: 14px;
  }

  .portfolio_inner ul {
    margin: 0px 0px 0px -50px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      margin: 0px;
    }
  }

  .portfolio_inner ul li {
    flex-direction: column;
    margin: 0px 0px 40px 0px;
    float: left;
    width: 33.3333%;
    padding-left: 50px;

    @media (max-width: 1040px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding-left: 0px;
    }
  }
  .portfolio_inner ul li .list_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    overflow: hidden;
  }

  .portfolio_inner ul li .list_inner .image:hover .overlay {
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
  .portfolio_inner ul li .list_inner .image {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;

    width: 100%;
    height: 230px;

    @media screen and (min-width: 2000px) {
      height: 350px;
    }
  }

  .work-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;

      margin: 1rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        width: 50%;
        height: 50%;
        color: #fff;
      }
    }
  }
  .app_flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portfolio_inner ul li .list_inner .image:hover .main {
    transform: scale(1.1) translateX(0);
  }

  .work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;

    h4 {
      margin-top: 1rem;
      line-height: 1.5;

      @media screen and (min-width: 2000px) {
        margin-top: 3rem;
      }
    }

    .work-tag {
      position: absolute;

      padding: 0.5rem 1rem;
      border-radius: 10px;
      background-color: #fff;
      top: -25px;
    }
  }
  .p-text {
    font-size: 0.8rem;
    text-align: left;
    color: var(--gray-color);
    line-height: 1.5;

    @media screen and (min-width: 2000px) {
      font-size: 1.75rem;
    }
  }

  .bold-text {
    font-size: 1rem;
    font-weight: 800;
    color: var(--black-color);
    text-align: left;

    @media screen and (min-width: 2000px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 0.9rem;
    }
  }
`;
