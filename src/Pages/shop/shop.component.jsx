import React from "react";
import { ShopPageContainer } from "./shop.styles";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../Components/collections-overview/collections-overview.component";

class ShopPage extends React.Component {
  unsubscibeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <ShopPageContainer>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
