import React from "react";
import { CollectionsOverviewDiv } from "./collections-overview.styles";

import { useSelector } from "react-redux";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../Components/collection-preview/collection-preview.component";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionForPreview);

  return (
    <CollectionsOverviewDiv>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionsOverviewDiv>
  );
};

export default CollectionsOverview;
