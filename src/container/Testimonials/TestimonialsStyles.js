import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  .quote_list ul li {
    position: absolute;
    margin: 0px;
    width: 100%;
  }
  .quote_list ul li .svg {
    width: 50px;
    height: 50px;
    color: #000;
    margin-bottom: 30px;
    opacity: 0;
  }
  .quote_list ul li.active .svg {
    opacity: 1;
  }
  .quote_list ul li .text {
    opacity: 0;
    visibility: hidden;
    font-style: italic;
    transition: all 0.5s ease;
  }
  .quote_list ul li.active .text {
    opacity: 1;
    visibility: visible;
  }
  .details {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .details .image {
    width: 65px;
    height: 65px;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
  }
  .details .main {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    opacity: 0;

    transition: all 1s ease;
    transform: scale(1.5) translate(0);
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(255, 255, 255, 0.6); /* Black see-through */
    color: #f1f1f1;
    width: 100%;
    transition: 0.5s ease;
    opacity: 1;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
  }
  .quote_list ul li.active .details .main {
    opacity: 1;
    transition: all 1s 0.3s ease;
    transform: scale(1) translateZ(0);
  }
  .short {
    padding-left: 25px;
  }
  .short h3 {
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    line-height: 1;
    position: relative;
  }
  .short .author {
    font-family: "Poppins";
    font-size: 18px;
    color: #000;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .short .job {
    font-family: "Mulish";
    font-size: 15px;
    color: #767676;
    font-weight: 400;
    display: block;
    font-style: italic;
  }
  .short .author span,
  .short .job span {
    position: relative;
    display: block;
    padding: 2px 0px;
    transform: translateY(102%);
    transition: all 1s ease;
  }

  /* Working till this end */

  .quote_list ul li.active .short .author span {
    transform: translateY(0px);
    transition-delay: 0.3s;
  }
  .quote_list ul li.active .short .job span {
    transform: translateY(0px);
    transition-delay: 0.6s;
  }
  .testi_inner .right {
    width: 50%;
    padding-left: 50px;
  }
  .testi_inner .right .image_list {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .testi_inner .right .image_list ul {
    margin: 0px 0px 0px -50px;
    list-style-type: none;
  }
  .testi_inner .right .image_list ul li {
    margin: 0px 0px 50px 0px;
    float: left;
    width: 50%;
    padding-left: 50px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .testi_inner .right .image_list ul li.active {
    opacity: 1;
  }
  .testi_inner .right .image_list ul li .image {
    position: relative;
  }
  .testi_inner .right .image_list ul li .image img {
    min-width: 100%;
    opacity: 1;
  }
  /* .testi_inner .right .image_list ul li .image .main {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  } */

  @media (max-width: 1040px) {
    .testi_inner {
      flex-direction: column;
      align-items: baseline;
    }
    .testi_inner .right {
      display: none;
    }
    .quote_list ul {
      flex-direction: column;
    }
    .quote_list ul li {
      margin-bottom: 50px;
    }
    .quote_list ul li:last-child {
      margin-bottom: 0px;
    }
    .quote_list ul li .svg {
      opacity: 1;
      margin-bottom: 15px;
    }
    .quote_list ul li .text {
      opacity: 1;
      visibility: visible;
    }
    .details .main {
      opacity: 1;
      transform: scale(1);
    }
    .short .author span,
    .short .job span {
      transform: translateY(0);
    }
    .testi_inner .left {
      padding-right: 0px;
      width: 100%;
      margin-bottom: 40px;
    }
    .testi_inner .right .image_list ul {
      margin-left: -30px;
    }
    .testi_inner .right .image_list ul li {
      padding-left: 30px;
      margin-bottom: 30px;
    }
    .quote_list ul li {
      position: relative;
    }
  }
  @media (max-width: 768px) {
    .testi_inner .right .image_list ul {
      margin-left: -20px;
    }
    .testi_inner .right .image_list ul li {
      padding-left: 20px;
      margin-bottom: 20px;
    }
  }
`;
