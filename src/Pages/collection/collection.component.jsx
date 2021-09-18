import React from "react";
import CollectionItem from "../../Components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectColleciton } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection_page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColleciton(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
