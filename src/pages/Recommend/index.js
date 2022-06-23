import React, { memo } from "react";
import Slideshow from "../../components/Slideshow";
import { RecommendWrapper } from "./style";

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <div className="peo">个性推荐</div>
      <Slideshow />
    </RecommendWrapper>
  );
});
