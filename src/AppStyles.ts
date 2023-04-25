import styled from "styled-components";

export const AppWrap = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  position: relative;
  overflow: hidden;

  * {
    box-sizing: border-box; /* Opera/IE 8+ */
  }

  /*---------------------------------------------------*/
  /*  COOLZYTE BUTTON STYLES
/*---------------------------------------------------*/
  .coolzyte_tm_button {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .coolzyte_tm_button button {
    text-decoration: none;
    color: #fff;
    background-color: #000;
    padding: 13px 50px;
    display: inline-block;
    border: 2px solid #000;
    font-style: italic;

    transition: all 0.3s ease;
  }
  .coolzyte_tm_button button:hover {
    background-color: transparent;
    color: #000;
  }
  .coolzyte_tm_button[data-position="left"] {
    text-align: left;
  }
  .coolzyte_tm_button[data-position="center"] {
    text-align: center;
  }
  .coolzyte_tm_button[data-position="right"] {
    text-align: right;
  }
`;
