import React, { Component } from "react";
import {
  StyledCard,
  StyledCardHeader,
  CurrencyName,
  CurrencyShortage,
  StyledCardBody,
  Table,
  TableRow,
  TableData
} from "./Style";

export default class Card extends Component {
  render() {
    const {
      name,
      shortage,
      lastPrice,
      volume,
      change1h,
      change24h,
      change7d,
      lastUpdated
    } = this.props.currency;
    return (
      <StyledCard>
        <StyledCardHeader>
          <CurrencyName>{name}</CurrencyName>
          &#8194;/&#8194;
          <CurrencyShortage>{shortage}</CurrencyShortage>
          <img
            src={require(`../../img/${shortage}.png`)}
            alt="СryptoImage"
            width="32px"
            height="32px"
          />
        </StyledCardHeader>
        <StyledCardBody>
          <Table>
            <tbody>
              <TableRow>
                <TableData>Last price</TableData>
                <TableData>{lastPrice}</TableData>
              </TableRow>
              <TableRow>
                <TableData>Volume 24 hours</TableData>
                <TableData>{volume}</TableData>
              </TableRow>
              <TableRow>
                <TableData>Last hour change</TableData>
                <TableData>{change1h}%</TableData>
              </TableRow>
              <TableRow>
                <TableData>Last 24 hours change</TableData>
                <TableData>{change24h}%</TableData>
              </TableRow>
              <TableRow>
                <TableData>Last 7 days change</TableData>
                <TableData>{change7d}%</TableData>
              </TableRow>
              <TableRow>
                <TableData>Last update</TableData>
                <TableData>{lastUpdated}</TableData>
              </TableRow>
            </tbody>
          </Table>
        </StyledCardBody>
      </StyledCard>
    );
  }
}
