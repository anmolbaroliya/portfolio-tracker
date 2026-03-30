import { useState,useEffect } from "react"
import Card from "./components/Card"
import { fetchCoinsWithChart,fetchCoins } from "./services/coinGeckoService";
import type { Coin } from "./types/coin";
import SideMenu from "./components/SideMenu";

import { faHome,faWallet,faSearch,faChartLine } from "@fortawesome/free-solid-svg-icons";
import Table from "./components/Table";
export default function App() {

  const menu = [
  { id: "home", label: "Home", icon: faHome },
  { id: "portfolio", label: "Portfolio", icon: faWallet},
  { id: "tracker", label: "Tracker", icon: faSearch },
  { id: "analysis", label: "Analysis", icon: faChartLine },
];

  const rows = [
    {
      id: 1, name: "Kausiki", age: 27, email: "samadderkausiki19@gmail.com", coin: "Ethereum",
      price: "2000.45"
    },
    {
      id: 2, name: "Aman", age: 25, email: "baroliyaanmol234@gmail.com", coin: "Solana",
      price: "82.5"
    },
    {
      id: 3, name: "Amaya", age: 2.5, email: "samadderkausiki19@gmail.com", coin: "Ripple",
      price: "3.5"
    },
    {
      id: 4, name: "Arpit", age: 27, email: "baroliyaanmol234@gmail.com", coin: "Usdt",
      price: "1.0"
    },
    {
      id: 5, name: "Diksha", age: 26, email: "samadderkausiki19@gmail.com", coin: "Algorand",
      price: "1.12"
    }, {
      id: 6, name: "Anmol", age: 26, email: "baroliyaanmol234@gmail.com", coin: "Bitcoin",
      price: "67250.45"
    }
  ];

  const tableData = {
    row: rows,
    col: ["id","name", "age", "email","coin","price"]
  }


  
  const [coins,setCoins]=useState<Coin[]>([]);

  const coin_data = [
  {
    name: "Bitcoin",
    price: "67250.45",
    image_url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    change:10,
    symbol:"BTC USDT", data: [
      { value: 10 },
      { value: 20 },
      { value: 15 },
      { value: 30 },
      { value: 18 },
    ]
  },
  {
    name: "Ethereum",
    price: "2050.12",
    image_url: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    change:-5,
    symbol:"ETH USDT",
   data: [
      { value: 0 },
      { value: 80 },
      { value: 65 },
      { value: 22 },
      { value: 18 },
    ]
  },
  {
    name: "Ripple",
    price: "3",
    image_url: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    change:12,
    symbol:"XRP USDT",
    data: [
      { value: 70 },
      { value: 80 },
      { value: 5 },
      { value: 50 },
      { value: 90 },
    ]
  },
  {
    name: "USD",
    price: "1",
    image_url: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    change:0.01,
    symbol:"USDT",
    data: [
      { value: 70 },
      { value: 80 },
      { value: 5 },
      { value: 50 },
      { value: 90 },
    ]
  },
  {
    name: "Binance Coin",
    price: "682",
    image_url: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    change:-3,
    symbol:"BNB USDT",
    data: [
      { value: 70 },
      { value: 80 },
      { value: 5 },
      { value: 50 },
      { value: 90 },
    ]
  },
  {
    name: "Chainlink",
    price: "8.67",
    image_url: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    change:5,
    symbol:"LINK USDT",
    data: [
      { value: 70 },
      { value: 80 },
      { value: 5 },
      { value: 50 },
      { value: 90 },
    ]
  }
];



  useEffect(() => {

    const loadCoins = async () => {
      try {
        /*const response = await fetchCoinsWithChart();

        const formatted: Coin[] = response.data.map((coin: any) => ({
          name: coin.name,
          price: coin.price,
          image_url: coin.image_url,
          change: coin.change,
          symbol: coin.symbol,
          data:coin.data || []
        }));
        */
        setCoins(coin_data);

      } catch (error) {
        console.error(error);
      }
    };
    loadCoins();
  }, []);
  return (
    <>
      <div className="flex h-screen">
        <SideMenu items={menu} />
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto min-w-0">
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused]">
              {
                [...coins, ...coins].map((coin, index) => (
                  <div className="min-w-[280px] flex-shrink-0">
                    <Card key={index} {...coin} />
                  </div>

                ))
              }
            </div>
          </div>
          <div className="flex-1 bg-gray-900 rounded-lg">
            <Table data={tableData} />
          </div>
        </div>
      </div>
    </>
  )
}