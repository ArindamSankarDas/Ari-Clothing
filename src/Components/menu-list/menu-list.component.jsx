import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuListSections } from "../../redux/menu-list/menu-list.selectors";

import { MenuListDiv } from "./menu-list.styles";

const MenuList = ({ sections }) => {
  return (
    <MenuListDiv>
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </MenuListDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuListSections,
});

export default connect(mapStateToProps)(MenuList);
