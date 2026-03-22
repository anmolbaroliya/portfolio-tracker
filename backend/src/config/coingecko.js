const BASE_URL = "https://api.coingecko.com/api/v3";
const ENDPOINTS = {
  COINS_LIST: "/coins/list",
  SEARCH: "/search",
  COIN_PER_PAGE:"/coins/markets?vs_currency=${currency}&per_page=${count}&page=${page}"
};

export { BASE_URL, ENDPOINTS };
