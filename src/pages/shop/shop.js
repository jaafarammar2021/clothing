import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/collection/collection";

import CollectionOverview from "../../components/collection-overview/collection-overview";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:CollectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
