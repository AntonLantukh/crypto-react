export const getActualCurrencies = state => {
  if (!state.currencies.length) {
    return;
  }
  const newArray = state.currencies.data.map(item => {
    return {
      name: item.name,
      shortage: item.symbol,
      lastPrice: item.quotes.USD.price,
      volume: item.quotes.USD["volume_24h"],
      change1h: item.quotes.USD["percent_change_1h"],
      change24h: item.quotes.USD["percent_change_24h"],
      change7d: item.quotes.USD["percent_change_7d"],
      lastUpdated: item["last_updated"]
    };
  });
  console.log(newArray);
  return newArray;
};

export const isFetched = state => state.isLoaded;
export const isFetching = state => state.isLoading;
