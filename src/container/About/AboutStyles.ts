import styled from "styled-components";

export const AboutWrapper = styled.div`
  .name {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .right .text p {
    margin-bottom: 13px;
  }

  @media (max-width: 1040px) {
    .about .name h3 .bg {
      display: none;
    }
    .about .about_inner {
      flex-direction: column;
      align-items: baseline;
    }
    .about .about_inner .left {
      width: 100%;
      margin-bottom: 50px;
    }
    .about .about_inner .left .image .myDot {
      display: none;
    }
    .about .about_inner .right {
      width: 100%;
      padding-left: 0px;
    }
    .about .name h3 {
      font-size: 30px;
    }
  }
`;
