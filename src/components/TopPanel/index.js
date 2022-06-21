import React, { memo } from "react";
import { TopPanelWrapper } from "./style";
import {
  SearchOutlined,
  MailOutlined,
  TagOutlined,
  MenuOutlined
} from "@ant-design/icons";
import { Avatar, Badge, Input } from "antd";

export default memo(function TopPanel() {
  return (
    <TopPanelWrapper>
      <Input
        placeholder="搜索音乐、歌单、MV"
        prefix={<SearchOutlined />}
        className="topInput"
      />
      <div className="rightPart">
        <Avatar src="https://img-blog.csdnimg.cn/4e0090c96ef54725a1d03c78f4bbab2a.png" />
        &nbsp;&nbsp;Kijasss&nbsp;&nbsp;&nbsp;
        <Badge dot>
          <MailOutlined style={{ fontSize: "15px", color: "#a9a9a9" }} />
        </Badge>
        &nbsp;&nbsp;&nbsp;
        <TagOutlined style={{ fontSize: "15px", color: "#a9a9a9" }} />
        &nbsp;&nbsp;&nbsp;
        <MenuOutlined style={{ fontSize: "15px", color: "#a9a9a9" }} />
      </div>
    </TopPanelWrapper>
  );
});
