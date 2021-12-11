import React from "react";
import { withRouter } from "react-router-dom";
import { MenuItemDiv, BackgroundImage, ContentDiv } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <MenuItemDiv
      isLarge={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl}>
        <ContentDiv>
          <h1>{title}</h1>
          <span>SHOP NOW</span>
        </ContentDiv>
      </BackgroundImage>
    </MenuItemDiv>
  );
};

export default withRouter(MenuItem);
