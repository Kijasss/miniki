import React, { memo } from "react";
import { LeftPanelWrapper, LeftLink } from "./style";
// import classnames from "classnames";
import { myMusic, onlineMusic } from "../../services/local-data";
import { Link } from "react-router-dom";

export default memo(function LeftPanel() {
  return (
    <LeftPanelWrapper>
      <div className="top">Online</div>
      <LeftLink>
        {onlineMusic.map((item, index) => {
          return (
            <div className="select-list" key={item.title}>
              <Link to={item.link}>{item.title}</Link>
            </div>
          );
        })}
      </LeftLink>
      <div className="bottom">MyMusic</div>
      <LeftLink>
        {myMusic.map((item) => {
          return (
            <div className="select-list" key={item.title}>
              <Link to={item.link}>{item.title}</Link>
            </div>
          );
        })}
      </LeftLink>
    </LeftPanelWrapper>
  );
});
