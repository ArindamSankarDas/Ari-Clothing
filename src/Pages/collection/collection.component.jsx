import React from "react";
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

import CollectionItem from "../../Components/collection-item/collection-item.component";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectColleciton } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectColleciton(collectionId));

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

export default CollectionPage;
