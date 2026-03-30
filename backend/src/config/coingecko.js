const BASE_URL = "https://api.coingecko.com/api/v3";
const ENDPOINTS = {
  COINS_LIST: "/coins/list",
  SEARCH: "/search",
  COIN_PER_PAGE:"/coins/markets?vs_currency=${currency}&per_page=${count}&page=${page}",
  MARKET_CHART:"/coins/${id}/market_chart?vs_currency=${currency}&days=${days}"
};

export { BASE_URL, ENDPOINTS };
