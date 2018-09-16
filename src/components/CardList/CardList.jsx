import React, { Component } from "react";
import Card from "../Card";
import { connect } from "react-redux";

class CardList extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        {currencies.map(item => {
          <Card currency={item.currency} price={currency.price} />;
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
