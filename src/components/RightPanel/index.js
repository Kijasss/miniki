import React, { memo } from "react";
import BottomPanel from "../BottomPanel";
import TopPanel from "../TopPanel";
import { RightPanelWrapper } from "./style";

export default memo(function RightPanel() {
  return (
    <RightPanelWrapper>
      <TopPanel></TopPanel>
      <BottomPanel></BottomPanel>
    </RightPanelWrapper>
  );
});
