import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import MiniChart from "./Charts/MiniChart";
import type { Coin } from "../types/coin";


type CardProps = Coin;
let isUp = false;

export default function Card({ name, symbol, price, image_url, change, data }: CardProps) {

    isUp = change > 0;

    return (
        <>
            <div className={`flex flex-col justify-between p-5 rounded-md w-full min-h-[160px] hover:scale-[1.02] hover:shadow-lg transition ${isUp ? "bg-[#e0fdfb]" : "bg-[#fff2f3]"} border border-gray-200/10`} >
                <div className="flex items-center gap-3 pb-3">
                    <img className="rounded-full w-10 h-10" src={image_url}></img>
                    <div>
                        <h1 className="text-lg font-semibold whitespace-nowrap">{symbol}</h1>
                        <span className="text-sm text-gray-500">{name}</span>
                    </div>
                </div>

                <div className="flex justify-between items-end gap-2">
                    <div className="flex-[2] flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className={`text-sm p-1 ${isUp? "text-[#1bc5bd]" : "text-[#f64e60]"}`}>
                                {isUp ? "+" : ""}{change}%
                            </span>
                            <FontAwesomeIcon icon={isUp ? faCircleArrowUp : faCircleArrowDown} color={isUp ? "#1bc5bd" : "#f64e60"}></FontAwesomeIcon>
                        </div>
                        <div className="flex items-baseline gap-1 whitespace-nowrap">
                            <span className="text-lg">$</span>
                            <span className="text-xl font-bold">{price}</span>
                        </div>
                        
                    </div>
                    <div className="flex-[3] h-[60px] min-w-0">
                        <MiniChart data={data} color={isUp ? "#1bc5bd" : "#f64e60"}></MiniChart>
                    </div>
                </div>
            </div>
        </>
    )
}