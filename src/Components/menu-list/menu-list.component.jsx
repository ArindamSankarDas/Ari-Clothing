import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuListSections } from "../../redux/menu-list/menu-list.selectors";

import "./menu-list.styles.scss";

const MenuList = ({ sections }) => {
  return (
    <div className="menu-list">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuListSections,
});

export default connect(mapStateToProps)(MenuList);
