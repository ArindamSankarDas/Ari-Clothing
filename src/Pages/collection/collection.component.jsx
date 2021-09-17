import React from "react";
import CollectionItem from "../../Components/collection-item/collection-item.component";

import { connect } from "react-redux";
import { selectColleciton } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection_page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColleciton(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
