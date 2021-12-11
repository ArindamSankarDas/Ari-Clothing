import React from "react";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import { CollectionsOverviewDiv } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewDiv>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionsOverviewDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
