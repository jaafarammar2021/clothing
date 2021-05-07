import React from "react";
import "./collection-overview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Preview from "../preview/preview";
import { selectCollections } from "../../redux/shop/shop.selector";
const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <Preview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
