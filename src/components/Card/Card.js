import React, { Component } from "react";
import {
  StyledCard,
  StyledCardHeader,
  CurrencyName,
  СryptoImage,
  StyledCardBody,
  CurrencyPrice,
  CurrencyChange
} from "./Style";

class Card extends Component {
  render() {
    const { currency, price } = this.props;
    return (
      <StyledCard>
        <StyledCardHeader>
          <CurrencyName>Bitcoin</CurrencyName>
          <СryptoImage alt="СryptoImage" width="10px" height="10px" />
        </StyledCardHeader>
        <StyledCardBody>
          <table>
            <tr>
              <td>Last price</td>
              <CurrencyPrice>1029.12</CurrencyPrice>
            </tr>
            <tr>
              <td>Last day change</td>
              <CurrencyChange>16.5%</CurrencyChange>
            </tr>
          </table>
        </StyledCardBody>
      </StyledCard>
    );
  }
}

export default Card;
