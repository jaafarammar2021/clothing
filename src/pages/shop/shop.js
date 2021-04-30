import React from "react";
import SHOP_DATA from "./shop.data";
import Preview from "../../components/preview/preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionsProps }) => (
          <Preview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
