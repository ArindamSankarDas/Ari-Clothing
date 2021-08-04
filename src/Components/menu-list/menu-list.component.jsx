import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./menu-list.styles.scss";

class MenuList extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="menu-list">
        {this.state.sections.map(({ ...otherSectionProps }, index) => {
          return <MenuItem key={index} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default MenuList;
