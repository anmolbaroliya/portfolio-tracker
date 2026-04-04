import List from "../../components/List";
import avatar8 from "../../assets/avatars/smiling-man.avif";
import avatar9 from "../../assets/avatars/woman-with-braided.avif";
import avatar10 from "../../assets/avatars/women-specs.jpg";
import av_overview from "../../assets/overview.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const [selected, setSelected] = useState<number>(0);
  const portfolio = [
    { id: 1, name: "Anmol 1", avatar: avatar8, amount: 2000 },
    { id: 2, name: "Kausiki 2", avatar: avatar9, amount: 500 },
    { id: 3, name: "Aman Baroliya", avatar: avatar10, amount: 4000 },
  ];

  const overview = [
    {
      id: 0,
      name: "Overview",
      avatar: av_overview,
      amount: portfolio.reduce((sum, p) => sum + p.amount, 0),
    },
  ];
  return (
    <>
      <div className="flex flex-col border border-line rounded-lg px-4 py-2 w-1/3">
        <List
          items={overview}
          setSelected={(id) => setSelected(id)}
          selected={selected}
        />
        <span className="text-lg font-medium">
          My portfolios({portfolio.length})
        </span>
        <List
          items={portfolio}
          setSelected={(id) => setSelected(id)}
          selected={selected}
        />
        <button className="flex justify-center text-[#3861FB] whitespace-nowrap py-3 font-semibold gap-1.5 text-xl items-center">
          <FontAwesomeIcon icon={faPlus} className="text-lg leading-none"/>
          <span >Create portfolio</span>
        </button>
      </div>
    </>
  );
}