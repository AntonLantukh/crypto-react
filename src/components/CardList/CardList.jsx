import React, { Component } from "react";
import Card from "../Card";
import { connect } from "react-redux";
import { getCurrencies } from "../../thunk/currencies";
import {
  getActualCurrencies,
  isFetched,
  isFetching
} from "../../ducks/currencies";
import Spinner from "react-svg-spinner";
import { SpinnerWrapper } from "./Style";

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

  renderSpinner = () => {
    return (
      <SpinnerWrapper>
        <Spinner size="64px" color="fuchsia" gap={5} />
      </SpinnerWrapper>
    );
  };

  renderCards = currencies => {
    return (
      <div>
        {currencies.map(item => {
          return <Card currency={item} />;
        })}
      </div>
    );
  };

  render() {
    const { currencies, isFetched, isFetching } = this.props;
    return (
      <div>
        {!isFetching && isFetched
          ? this.renderCards(currencies)
          : this.renderSpinner()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
