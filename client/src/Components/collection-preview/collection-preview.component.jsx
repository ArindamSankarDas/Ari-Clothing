import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewDiv } from "./collection-preview.styles";
const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewDiv>
      <h1>{title.toUpperCase()}</h1>
      <div>
        {items
          .filter((element, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewDiv>
  );
};

export default CollectionPreview;
