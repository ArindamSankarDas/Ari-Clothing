import React from "react";

import CollectionItem from "../../Components/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";
import { connect } from "react-redux";
import { selectColleciton } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectColleciton(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
