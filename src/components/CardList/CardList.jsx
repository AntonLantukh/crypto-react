import React, { Component } from "react";
import Card from "../Card";
import { connect } from "react-redux";
import { getCurrencies } from "../../thunk/currencies";
import {
  getActualCurrencies,
  isFetched,
  isFetching
} from "../../ducks/currencies";
import { CardListWrapper } from "./Style";

const mapStateToProps = state => ({
  currencies: getActualCurrencies(state),
  isFetched: isFetched(state),
  isFetching: isFetching(state)
});

const mapDispatchToProps = { getCurrencies };

class CardList extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  renderCards = currencies => {
    return (
      <CardListWrapper>
        {currencies.map(item => {
          return <Card currency={item} key={item.name} />;
        })}
      </CardListWrapper>
    );
  };

  render() {
    const { currencies, isFetched, isFetching } = this.props;
    return (
      <div>
        {isFetched && !isFetching && this.renderCards(currencies)}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
