import styled from "styled-components";

export const Wrapper = styled.div`
  .coolzyte_tm_contact {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    position: relative;
    margin-bottom: 150px;
    padding-top: 205px;
  }
  .coolzyte_tm_contact .contact_inner {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .coolzyte_tm_contact .contact_inner .wrapper {
    width: 100%;
    height: auto;
    clear: both;
    display: flex;
    padding-top: 43px;
  }
  .coolzyte_tm_contact .desc {
    max-width: 50%;
    float: left;
    padding-top: 95px;
  }
  .coolzyte_tm_contact .desc p {
    font-style: italic;
  }
  .coolzyte_tm_contact .contact_inner .left {
    width: 50%;
    padding-right: 25px;
  }
  .coolzyte_tm_contact .fields {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
  }
  .coolzyte_tm_contact .fields .first {
    width: 100%;
    float: left;
  }
  .coolzyte_tm_contact .fields ul {
    margin: 0px;
    list-style-type: none;
  }
  .coolzyte_tm_contact .fields ul li {
    width: 100%;
    margin: 0px 0px 30px 0px;
    float: left;
  }
  .coolzyte_tm_contact .fields ul li input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: transparent;
    font-style: italic;
  }
  .coolzyte_tm_contact .fields ul li input:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .coolzyte_tm_contact .fields .last textarea {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 120px;
    resize: none;
    margin-bottom: 20px;
    background-color: transparent;
    font-style: italic;
  }
  .coolzyte_tm_contact .fields .last textarea:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .coolzyte_tm_contact .empty_notice {
    color: #f52225;
    margin-bottom: 7px;
    display: none;
    text-align: left;
    font-weight: 500;
  }
  .coolzyte_tm_contact .contact_error {
    color: #f52225;
    text-align: left;
    font-weight: 500;
  }
  .coolzyte_tm_contact .returnmessage {
    color: #3a00ff;
    margin-bottom: 7px;
    text-align: left;
    font-weight: 500;
  }
  .coolzyte_tm_contact .right {
    width: 50%;
    padding-left: 25px;
    position: relative;
    top: 6px;
  }
  .coolzyte_tm_contact .map_wrap .map {
    min-height: 359px;
    width: 100%;
  }
`;
