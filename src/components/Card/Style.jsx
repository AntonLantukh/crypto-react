import styled from "styled-components";

export const StyledCard = styled.section`
  width: 260px;
  height: 260px;
  margin: 20px;
  transition: 0.2s linear;
  border-radius: 20px;
  background-color: rgba(246, 247, 235, 1);
  box-shadow: 12px 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid rgb(0, 0, 0);
`;

export const CurrencyName = styled.span`
  margin: 0;
  padding: 0;
  font-family: "PTSans Regular", "Arial", sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const CurrencyShortage = styled.sup`
  margin-right: auto;
  font-family: "PTSans Regular", "Arial", sans-serif;
  font-size: 12px;
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  font-size: 12px;
`;

export const TableData = styled.td`
  padding: 10px 15px;
  font-family: "PTSans Regular", "Arial", sans-serif;
  font-size: 12px;
`;
