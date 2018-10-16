import { createSelector } from 'reselect'

const getRecords = (state) => state.currencies;

export const getActualCurrencies = createSelector(
  [getRecords], (currencies) => {
    if (!currencies) {
      return;
    }

    const newArray = currencies.map(item => {
      return {
        name: item.name,
        shortage: item.symbol,
        lastPrice: item.quotes.USD.price.toFixed(5),
        volume: item.quotes.USD["volume_24h"].toFixed(2),
        change1h: item.quotes.USD["percent_change_1h"],
        change24h: item.quotes.USD["percent_change_24h"],
        change7d: item.quotes.USD["percent_change_7d"],
        lastUpdated: item["last_updated"]
      };
    });
    return newArray;
  }
);

export const isFetched = state => state.isLoaded;
export const isFetching = state => state.isLoading;
