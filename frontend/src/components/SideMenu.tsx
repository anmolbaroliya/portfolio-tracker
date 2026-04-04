import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile";
import HorizontalLine from "./HorizontalLine";
import react_logo from "../assets/react.svg";
import {Link} from "react-router"
 
type SideMenuProps = {
    items: {
        id: string,
        label: string,
        icon: IconDefinition,
        path:string
    }[]
}
export default function SideMenu({ items }: SideMenuProps) {

    return <>
        <div className="flex flex-col bg-[#0b1220] p-3 w-[260px] h-dvh justify-between">
            <div className="space-y-2">
                <div>
                    <UserProfile user={{ first_name: "Anmol", last_name: "Baroliya", image: react_logo,email:"baroliyaanmol234@gmail.com" }}></UserProfile>
                    <HorizontalLine />
                </div>
                {
                    items.map((item) => (
                        <Link 
                                key={item.id} 
                                className="flex items-center  gap-3 w-full  px-4 py-3 text-gray-300 rounded-lg border border-transparent hover:border-white/40 hover:bg-[#1a2335] hover:text-white transition-colors duration-200 cursor-pointer"
                                to={item.path}
                        >
                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5 shrink-0" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>))
                }
            </div>
            <div className="pt-3">
                <HorizontalLine />
                <button className="flex items-center  gap-3 w-full  px-4 py-3 text-gray-300 rounded-lg border border-transparent hover:border-white/40 hover:bg-[#243045] hover:text-white transition-colors duration-200 cursor-pointer">
                    <span className="text-sm font-medium">Logout</span>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="w-5 h-5" />
                </button>
            </div>
        </div>
    </>
}