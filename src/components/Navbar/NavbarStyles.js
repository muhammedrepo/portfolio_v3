import styled from "styled-components";

export const TopBar = styled.div`
  .muhats_topbar {
    position: fixed;
    top: -100px;
    left: 0px;
    right: 0px;
    z-index: 10;
    padding: 20px 0px;
    transition: all 0.3s ease;

    @media (max-width: 1040px) {
      display: none;
    }
  }
  .muhats_topbar.opened {
    top: 0px;
  }
  .muhats_topbar.extra {
    top: 0px !important;
  }
  .muhats_topbar.animate {
    padding: 15px 0px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  }
  .muhats_topbar .topbar_inner {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .muhats_topbar .topbar_inner .logo img {
    max-width: 70px;
  }
  .muhats_topbar .wrapper {
    width: 30px;
    height: 17px;
    top: 5px;
    position: relative;
  }
  .muhats_topbar .menu {
    display: flex;
    align-content: center;
  }
  .muhats_topbar .menu .links ul {
    margin: 0px;
    list-style-type: none;
    position: relative;
    top: 5px;
  }
  .muhats_topbar .menu .links ul li {
    margin: 0px 30px 0px 0px;
    display: inline-block;
  }
  .muhats_topbar .menu .links ul li:last-child {
    margin-right: 0px;
  }
  .muhats_topbar .menu .links ul li a {
    text-decoration: none;
    color: #000;
    font-family: "Poppins";
    font-weight: 600;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  .muhats_topbar .menu .links ul li a .first {
    position: absolute;
    transform: translateY(100%);
    transition: all 0.3s ease;
  }
  .muhats_topbar .menu .links ul li a .second {
    position: relative;
    display: block;
    transition: all 0.3s ease;
  }
  .muhats_topbar .menu .links ul li a:hover .first {
    transform: translateY(0);
  }
  .muhats_topbar .menu .links ul li a:hover .second {
    transform: translateY(-100%);
  }
  .muhats_topbar .menu .links ul li.current a .first {
    transform: translateY(0);
  }
  .muhats_topbar .menu .links ul li:first-child.current a .second {
    transform: translateY(-100%);
  }
  .muhats_topbar .menu .links ul li.current a {
    color: #000;
  }
`;

export const MobileMenu = styled.div`
  .muhats_mobile_menu {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0px;
    left: 0px;
    display: none;
    z-index: 10;

    @media (max-width: 1040px) {
      display: block;
    }
  }
  .muhats_mobile_menu .topbar_inner {
    width: 100%;
    height: auto;
    float: left;
    clear: both;
    background-color: #fff;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .muhats_mobile_menu .topbar_in {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .my_trigger .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .my_trigger .hamburger-box {
    width: 30px;
    height: 18px;
    display: inline-block;
    position: relative;
  }
  .my_trigger .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .my_trigger .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 2px;
    background-color: #333333;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;

    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .my_trigger .hamburger-inner::before,
  .my_trigger .hamburger-inner::after {
    content: "";
    display: block;
  }
  .my_trigger .hamburger-inner::before {
    top: -8px;
  }
  .my_trigger .hamburger-inner::after {
    bottom: -10px;
  }
  .my_trigger .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .my_trigger .hamburger--collapse-r .hamburger-inner::after {
    top: -16px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .my_trigger .hamburger--collapse-r .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .my_trigger .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .my_trigger .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .my_trigger .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .my_trigger .hamburger {
    padding: 0px;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
  }
  .my_trigger .hamburger-box {
    display: block;
  }
  .my_trigger .hamburger .hamburger-inner::before,
  .my_trigger .hamburger .hamburger-inner::after,
  .my_trigger .hamburger .hamburger-inner {
    background-color: #000;
    width: 30px;
    transition: all 0.5s ease;
  }
  .muhats_mobile_menu .dropdown {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: block;
  }
  .muhats_mobile_menu .dropdown .dropdown_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    padding: 25px 0px;
  }
  .muhats_mobile_menu .dropdown .dropdown_inner ul {
    margin: 0px;
    list-style-type: none;
  }
  .muhats_mobile_menu .dropdown .dropdown_inner ul li {
    margin: 0px;
    float: left;
    width: 100%;
  }
  .muhats_mobile_menu .dropdown .dropdown_inner ul li a {
    text-decoration: none;
    color: #000;
    display: inline-block;
    padding: 4px 0px;
    font-family: "Poppins";
    font-weight: 500;
    text-transform: capitalize;
  }
  .muhats_mobile_menu .logo img {
    max-width: 70px;
  }
`;
