import styled from "styled-components";

export const Wrapper = styled.div`
  .coolzyte_tm_copyright {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    background-color: #000;
    padding: 90px 0px 60px 0px;
  }
  .coolzyte_tm_copyright .copyright_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .coolzyte_tm_copyright .copyright_inner > ul {
    margin: 0px 0px 0px -30px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .coolzyte_tm_copyright .copyright_inner > ul > li {
    margin: 0px 0px 30px 0px;
    width: 25%;
    float: left;
    padding-left: 30px;
  }
  .coolzyte_tm_copyright .copyright_inner > ul > li span {
    display: block;
    color: #fff;
    font-family: "Poppins";
    font-weight: 500;
  }
  .coolzyte_tm_copyright .copyright_inner > ul > li span a {
    text-decoration: none;
    color: #fff;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul {
    margin: 0px;
    list-style-type: none;
    position: relative;
    top: 4px;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li {
    margin: 0px 20px 0px 0px;
    display: inline-block;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li:last-child {
    margin-right: 0px;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li a {
    text-decoration: none;
    color: #fff;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li a .first {
    position: absolute;
    transform: translateY(100%);

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li a .second {
    position: relative;
    display: block;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li a:hover .first {
    transform: translateY(0);
  }
  .coolzyte_tm_copyright .copyright_inner .social ul li a:hover .second {
    transform: translateY(-100%);
  }
  .coolzyte_tm_copyright .copyright_inner .social .svg {
    color: #fff;
    width: 17px;
    height: 17px;
  }

  @media (max-width: 1040px) {
    .coolzyte_tm_copyright .copyright_inner > ul > li {
      width: 100%;
      padding-left: 0px;
    }
    .coolzyte_tm_copyright .copyright_inner > ul {
      display: block;
      margin: 0px;
    }
  }
`;
