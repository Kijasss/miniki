import React, { memo } from "react";
import LeftPanel from "../LeftPanel";
import RightPanel from "../RightPanel";
import { InterfaceWrapper } from "./style";

export default memo(function Interface() {
  return (
    <InterfaceWrapper>
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </InterfaceWrapper>
  );
});
