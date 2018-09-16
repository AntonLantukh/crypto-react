import React, { Component } from "react";
import Card from "../Card";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  currencies: getActualCurrencies(state)
});

class CardList extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div>
        {currencies.map(item => {
          <Card currency={item} />;
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CardList);
