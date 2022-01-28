import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { MenuItemDiv, BackgroundImage, ContentDiv } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <MenuItemDiv
      isLarge={size}
      onClick={() => history.push(`${url}${linkUrl}`)}
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

export default MenuItem;
