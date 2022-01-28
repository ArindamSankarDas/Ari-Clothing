import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";

import { selectMenuListSections } from "../../redux/menu-list/menu-list.selectors";

import { MenuListDiv } from "./menu-list.styles";

const MenuList = () => {
  const sections = useSelector(selectMenuListSections);

  return (
    <MenuListDiv>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </MenuListDiv>
  );
};

export default MenuList;
