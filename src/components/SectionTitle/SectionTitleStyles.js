import styled from "styled-components";

export const Wrapper = styled.div`
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
`;
