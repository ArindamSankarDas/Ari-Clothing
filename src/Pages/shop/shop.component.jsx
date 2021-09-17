import React from "react";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../Components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom";

import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop_page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
