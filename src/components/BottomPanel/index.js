import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import MusicHall from "../../pages/MusicHall";
import Recommend from "../../pages/Recommend";
import Video from "../../pages/Video";
import { BottomPanelWrapper } from "./style";

const BottomPanel = memo(() => {
  return (
    // <BrowserRouter>
    <BottomPanelWrapper>
      <Routes>
        <Route path="/" element={<Recommend />} />
        <Route path="/musichall" element={<MusicHall />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BottomPanelWrapper>
    // </BrowserRouter>
  );
});

export default BottomPanel;
