import { AreaChart, Area, ResponsiveContainer,YAxis } from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";

type MiniChart={
    data:{value:number}[],
    color?:string,
    type?:CurveType,
    opacity?:number
}

export default function MiniChart({data,color="#f64e60",opacity=0.2,type="monotone"}:MiniChart) {

  const values = data.map(d => d.value);

  const min = Math.min(...values);
  const max = Math.max(...values);

  const range = max - min;

  //dynamic padding (important)
  const padding = Math.max(range * 0.2, min * 0.001);

  const domainMin = min - padding;
  const domainMax = max + padding;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
      <YAxis domain={[domainMin, domainMax]} hide />
        <Area
          type={type}
          dataKey="value"
          stroke={color}
          fill={color}
          fillOpacity={opacity}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}