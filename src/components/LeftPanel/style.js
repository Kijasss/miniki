import styled from "styled-components";

export const LeftPanelWrapper = styled.div`
  border-left: 2px solid peachpuff;
  border-top: 2px solid pink;
  border-bottom: 2px solid pink;
  border-radius: 10px 0px 0px 10px;
  width: 220px;
  height: 580px;
  background-color: #fbfbfb;
  /* background-color: #e9b5ab; */
  .top {
    height: 70px;
    /* background-color: skyblue; */
    padding: 45px 0 0 25px;
    font-weight: bold;
  }
  .bottom {
    padding: 25px 0 6px 25px;
    font-weight: bold;
  }
`;

export const LeftLink = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  flex-direction: column;
  .select-list {
    display: flex;
    background-color: #ccfcb7;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    /* text-align: center; */
  }
`;

export const LeftBottom = styled.div``;
