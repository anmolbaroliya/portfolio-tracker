import type { Portfolio } from "../types/portfolio";

type ListProps = {
  items: Portfolio[];
  selected:number;
  setSelected:(id:number)=>void
};

export default function List({ items,selected,setSelected}: ListProps) {
  return (
    <div>
      {items.map((item) => (
        <div className={`my-4 ${selected===item.id?"bg-[#eff2f5]":"bg-transparent"} rounded-lg p-2`} onClick={()=>setSelected(item.id)}>
          <div key={item.id} className="flex gap-2 items-center">
            <img
              src={item.avatar}
              className="w-14 h-14 rounded-full object-cover border border-line"
            />
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="text-sm text-description">${item.amount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}