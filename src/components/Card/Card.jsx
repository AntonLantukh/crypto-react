import React, { Component } from "react";
import {
  StyledCard,
  StyledCardHeader,
  CurrencyName,
  CurrencyShortage,
  СryptoImage,
  StyledCardBody,
  TableRow,
  TableData
} from "./Style";

export default class Card extends Component {
  render() {
    const { currency } = this.props;
    return (
      <StyledCard>
        <StyledCardHeader>
          <CurrencyName>Bitcoin</CurrencyName>
          <CurrencyShortage>BTC</CurrencyShortage>
          <СryptoImage alt="СryptoImage" width="10px" height="10px" />
        </StyledCardHeader>
        <StyledCardBody>
          <table>
            <TableRow>
              <TableData>Last price</TableData>
              <TableData>1029.12</TableData>
            </TableRow>
            <TableRow>
              <TableData>Volume 24 hours</TableData>
              <TableData>1029.12</TableData>
            </TableRow>
            <TableRow>
              <TableData>Last hour change</TableData>
              <TableData>16.5%</TableData>
            </TableRow>
            <TableRow>
              <TableData>Last 24 hours change</TableData>
              <TableData>21.5%</TableData>
            </TableRow>
            <TableRow>
              <TableData>Last 7 days change</TableData>
              <TableData>1.5%</TableData>
            </TableRow>
          </table>
        </StyledCardBody>
      </StyledCard>
    );
  }
}
