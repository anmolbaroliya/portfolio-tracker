import { BASE_URL, ENDPOINTS } from "../config/coingecko.js";
import {fetchCoinList,fetchCoinListPerPage,fetchCoinChart,fetchCoinsWithChart} from "../services/coinService.js"

const getCoinList = async (req, res) => {

  try {

    const response = await fetchCoinList(req.query);

    if(!response.ok){ß
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
      message: "Failed to get coins",
      error:error.message
    });
  }
};

const getCoinListPerPage = async (req, res) => {

  try {

    const response = await fetchCoinListPerPage(req.query);

    const data=response;

    res.status(200).json({
      data,
      success: true,
    });

  } catch (error) {
    console.error("CoinController.js | getCoinListPerPage error:" + error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get coins per page",
      error:error.message
    });
  }
};


const getCoinChart=async (req,res)=>{
  try {

    const {days,currency}=req.query;
    const {id}=req.params;

    const response=await fetchCoinChart({id,days,currency});

    const data=response;

    res.status(200).json({
      success:true,
      data
    });

  } catch (error) {
    res.status(500).json({
      success:false,
      error:error.message,
      message:"Failed to get coin chart."
    });
  }
}


const getCoinsWithChart =async (req,res)=>{

  try {
     const response= await fetchCoinsWithChart(req.query);

     const data= response;

     res.status(200).json({
      success:true,
      data
     });
  } catch (error) {
    res.status(500).json({
      success:false,
      error:error.message,
      message:"Failed to get coins with chart"
    })
  }
 

}

export {getCoinList,getCoinListPerPage,getCoinChart,getCoinsWithChart};