import { BASE_URL, ENDPOINTS } from "../config/coingecko.js";

const fetchCoinList = async () => {

  const response = await fetch(`${BASE_URL}${ENDPOINTS.COINS_LIST}`);

  if (!response.ok) {
    throw new Error("Failed to get coin list.")
  }
  return await response.json();
}

const fetchCoinListPerPage = async ({ count = 10, page = 1, currency = "usd" }) => {

  const url = `${BASE_URL}${ENDPOINTS.COIN_PER_PAGE}`
    .replace("${currency}", currency)
    .replace("${count}", count)
    .replace("${page}", page);

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Failed to get coin list per page.")
  }

  const data= await response.json();

  return data;
};


const fetchCoinChart = async ({ id, days, currency }) => {

  const url = `${BASE_URL}${ENDPOINTS.MARKET_CHART}`
    .replace("${id}", id)
    .replace("${currency}", currency)
    .replace("${days}", days);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to get coin chart.");
  }

  const data = await response.json();

  return data;

}

const fetchCoinsWithChart = async ({count,page,currency,days})=>{

  const coins= await fetchCoinListPerPage({count,page,currency});

  console.log(coins);
  const result= await Promise.all(
    coins.map(async(coin) =>{
      const chart =await fetchCoinChart({id:coin.id,days,currency});

      const price=chart.prices.map(o=>({value:o[1]}));
      return {
        name: coin.name,
        price: coin.current_price,
        image_url: coin.image,
        change: coin.price_change_percentage_24h,
        symbol: coin.symbol,
        data:price
      };
    })
  );

 return result;
}

export {fetchCoinList,fetchCoinListPerPage,fetchCoinChart,fetchCoinsWithChart};