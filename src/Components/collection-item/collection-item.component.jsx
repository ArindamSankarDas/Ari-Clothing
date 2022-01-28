import React from "react";

import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => dispatch(addItem(item));

  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItemHandler(item)} inverted>
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
