import styled from "styled-components";

export const HeroWrapper = styled.div`
  /* .muhats_hero .background .myOverlay.dark {
    background-color: #000;
  }
  .muhats_hero .background .myOverlay.loaded {
    left: 100%;
  } */

  .muhats_hero .content_inner h3.stroke {
    -webkit-text-stroke: 1px #000;
    color: transparent;
  }

  .myOverlay {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    left: 0%;
    transition: left 0.7s ease;
  }

  @media (max-width: 1600px) {
    .muhats_hero .content_inner h3 {
      font-size: 80px;
    }
  }

  @media (max-width: 1200px) {
    .muhats_hero .background .leftpart {
      width: 0%;
    }
    .muhats_hero .background .rightpart {
      padding-left: 0px;
    }
  }

  @media (max-width: 1040px) {
    .muhats_hero .content_inner h3 {
      font-size: 60px;
    }
  }
  @media (max-width: 768px) {
    .muhats_hero .content_inner h3 {
      font-size: 50px;
    }
  }
`;
