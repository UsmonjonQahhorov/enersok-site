"use client"

import * as React from "react"
import { Pie, PieChart, Cell, Sector, Label } from "recharts"
import {
     ChartContainer,
     ChartTooltip,
} from "@/components/ui/Chart"
import { type ChartConfig } from "@/components/ui/Chart"
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import NextImage from 'next/image';
import Sponsor2 from "@public/sponsors/sponsor2.png"

// Simulated API data
const sponsorData = [
     { name: "TechCorp", value: 33.3, color: "#FF5E11" },
     { name: "InnoSystems", value: 33.3, color: "#00A3E0" },
     { name: "GlobalTech", value: 19, color: "#7AC943" },
     { name: "FutureSoft", value: 14.3, color: "#FFCD00" },
     { name: "Others", value: 6.7, color: "#8B8B8B" },
];


const Config: ChartConfig = sponsorData.reduce((acc: Record<string, { color: string; value: number }>, curr) => {
     acc[curr.name] = {
          color: curr.color,
          value: curr.value,
     }
     return acc
}, {})

const renderActiveShape = (props: PieSectorDataItem) => {
     const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props

     return (
          <g>
               <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={(outerRadius ?? 0) + 20}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
               />
          </g>
     )
}

export const SponsorDonutChart = () => {
     const [activeIndex, setActiveIndex] = React.useState(-1)

     const onPieEnter = (_: any, index: number) => {
          setActiveIndex(index)
     }

     // Get very high sponsor 
     const winner = sponsorData.reduce((acc, curr) => {
          return acc.value > curr.value ? acc : curr
     })

     return (
          <ChartContainer
               config={Config}
               className="h-[560px]"
          >
               <PieChart>
                    <Pie
                         data={sponsorData}
                         dataKey="value"
                         nameKey="name"
                         cx="50%"
                         cy="50%"
                         innerRadius={170}
                         outerRadius={250}
                         activeIndex={activeIndex}
                         activeShape={renderActiveShape}
                         onMouseEnter={onPieEnter}
                         onMouseLeave={() => setActiveIndex(-1)}
                    >
                         <Label
                              content={({ viewBox }) => {
                                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                             <>
                                                  {/* TODO: add Image */}
                                                  <NextImage src={Sponsor2} alt="asdasd"
                                                  />
                                                  <text
                                                       x={viewBox.cx}
                                                       y={viewBox.cy}
                                                       textAnchor="middle"
                                                       dominantBaseline="middle"
                                                  >
                                                       <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            style={{
                                                                 fontSize: "3.75rem",
                                                                 color: '#073348'
                                                            }}
                                                            fill="#073348"
                                                            className="text-6xl font-normal"
                                                       >
                                                            {winner.value}%
                                                       </tspan>
                                                       <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 39}
                                                            className="mt-2 text-lg font-normal"
                                                            fill="#073348"
                                                       >
                                                            {winner.name}
                                                       </tspan>
                                                  </text>
                                             </>
                                        )
                                   }
                              }}
                         />
                         {sponsorData.map((entry) => (
                              <Cell key={`cell-${entry.name}`} fill={entry.color} />
                         ))}
                    </Pie>
                    {/* On hover show value */}
                    <ChartTooltip
                              formatter={(value: string) => `${value}`}
                         />
               </PieChart>
          </ChartContainer>
     )
}