import AvatarSelector from "../AvatarSelector";
import { useState } from "react";


import type { CreatePortfolio } from "../../types/Portfolio";

export default function Create() {
    const [portfolio,setPortfolio]=useState<CreatePortfolio>({name:"",avatar:""});
    const submitPortfolio=(portfolio:CreatePortfolio)=>{
        if(!portfolio.avatar || !portfolio.name){
            return alert("Please fill all fields.");
        }
        console.log("portfolio",portfolio);
    }


    return (
        <>
            <div className="flex flex-col border border-gray-500/30 rounded-lg p-4 w-fit">
                <AvatarSelector selected={portfolio.avatar} setSelected={(avatar)=>setPortfolio({...portfolio,avatar})}/>
                <input type="text" value={portfolio.name} placeholder="Enter Portfolio Name" className="h-12 rounded-lg min-w-fit mt-6 text-center border border-secondary focus:border-primary  outline-none focus:ring-2" onChange={(e)=>setPortfolio({...portfolio,name:e.target.value})} />
                <button type="submit" className="bg-primary rounded-lg min-w-fit text-white px-4 py-2 h-12 mt-6" onClick={()=>submitPortfolio(portfolio)}>Submit</button>
            </div>
        </>
    )
}