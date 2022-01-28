import React, { useEffect } from "react";
import { ShopPageContainer } from "./shop.styles";

import { Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../Components/collections-overview/collections-overview.container";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
};

export default ShopPage;
