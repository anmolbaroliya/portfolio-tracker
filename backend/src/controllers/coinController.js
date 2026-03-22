import { BASE_URL, ENDPOINTS } from "../config/coingecko.js";

const getCoinList = async (req, res) => {

  try {

    const response = await fetch(`${BASE_URL}${ENDPOINTS.COINS_LIST}`);

    if(!response.ok){
        throw new Error("Failed to get coin list.")
    }

    const data = await response.json();
    res.status(200).json({
      data,
      success: true,
    });

  } catch (error) {
    console.error("CoinController.js | getCoinList error:" + error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch coins",
      error:error.message
    });
  }
};

const getCoinListPerPage = async (req, res) => {

  try {

    const { count = 10, page = 1, currency = "usd" } = req.query;

    const url = `${BASE_URL}${ENDPOINTS.COIN_PER_PAGE}`
      .replace("${currency}", currency)
      .replace("${count}", count)
      .replace("${page}", page);

    console.log("my_url", url);

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Failed to get coin market list.")
    }

    const data = await response.json();
    res.status(200).json({
      data,
      success: true,
    });

  } catch (error) {
    console.error("CoinController.js | getCoinListPerPage error:" + error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch market coins.",
      error:error.message
    });
  }
};

export {getCoinList,getCoinListPerPage};