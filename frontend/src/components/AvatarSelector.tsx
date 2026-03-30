import { useState } from "react";
import avatar1 from "../assets/avatars/3d-cartoon.png";
import avatar2 from "../assets/avatars/a_avatar-4.jpeg";
import avatar3 from "../assets/avatars/cute-woman-7.avif";
import avatar4 from "../assets/avatars/hulk.jpeg";
import avatar5 from "../assets/avatars/iron-man.jpeg";
import avatar6 from "../assets/avatars/man-1.png";
import avatar7 from "../assets/avatars/man-earphone.jpeg";
import avatar8 from "../assets/avatars/smiling-man.avif";
import avatar9 from "../assets/avatars/woman-with-braided.avif";
import avatar10 from "../assets/avatars/women-specs.jpg";



export default function AvatarSelector() {
    const [selected, setSelected] = useState<string | null>(null);
    const avatars = [
        avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10,
        avatar1, avatar2, avatar3, avatar4, avatar5,avatar1, avatar2, avatar3, avatar4, avatar5,
        avatar6, avatar7, avatar8, avatar9, avatar10
    ];

    return (
        <div className="max-w-4xl overflow-y-auto max-h-[336px] max-w-[576px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {
                    avatars.map((avatar, index) => (
                        <img key={index} className={`rounded-full w-20 h-20 m-2 object-over hover:scale-[1.05] hover:shadow-lg border-[3px] ${selected === avatar ? "border-[#3cdfff]" : "border-transparent"} transition`} src={avatar} onClick={() => setSelected(avatar)} />
                    ))
                }
            </div>
        </div>
    )
}