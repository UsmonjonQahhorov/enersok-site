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
import EDF from '@public/sponsors/sponsor1.png';
import NebrasPower from "@public/sponsors/sponsor2.png";
import Sojitz from '@public/sponsors/sponsor3.png';
import Kyuden from '@public/sponsors/sponsor4.png';
import type { Image } from "@/types/shared.types"

// Simulated API data
// const sponsorData = [
//      { name: "Kyuden", value: 14.3, color: "#93DCFF", img: Kyuden },
//      { name: "Sojitz", value: 19, color: "#00479D", img: Sojitz },
//      { name: "EDF", value: 33.3, color: "#FF5E11", img: EDF },
//      { name: "NebrasPower", value: 33.3, color: "#1AAD21", img: NebrasPower },
// ];


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

export const SponsorDonutChart = ({ data }: SponsorDonutChartProps) => {
     const Config: ChartConfig = data.reduce((acc: Record<string, { color: string; value: number }>, curr) => {
          acc[curr.name] = {
               color: curr.color,
               value: curr.value,
          }
          return acc
     }, {})

     const [activeIndex, setActiveIndex] = React.useState(0)

     const onPieEnter = (_: any, index: number) => {
          setActiveIndex(index)
     }

     const activeSponsor = activeIndex !== -1 ? data[activeIndex] : null

     return (
          <>
               {activeSponsor && (
                    <NextImage
                         src={activeSponsor.image.url}
                         alt={`Sponsor ${activeSponsor.name}`}
                         width={115}
                         height={115}
                         className="w-[85px] md:w-[115px] h-auto absolute -translate-y-1/2 top-[130px] md:top-[240px]"
                    />
               )}
               <ChartContainer
                    config={Config}
                    className="h-[350px] md:h-[613px]"
               >
                    <PieChart className='flex justify-center [&>svg]:!w-[60%] [&>svg]:md:!w-full'>
                         <Pie
                              data={data}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              innerRadius={170}
                              outerRadius={250}
                              activeIndex={activeIndex}
                              activeShape={renderActiveShape}
                              onMouseEnter={onPieEnter}
                              onMouseLeave={() => setActiveIndex(0)}
                         >
                              <Label
                                   content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox && activeSponsor) {
                                             return (
                                                  <>
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
                                                                 {activeSponsor.value}%
                                                            </tspan>
                                                            <tspan
                                                                 x={viewBox.cx}
                                                                 y={(viewBox.cy || 0) + 39}
                                                                 className="mt-2 text-lg font-normal"
                                                                 fill="#073348"
                                                            >
                                                                 {activeSponsor.name}
                                                            </tspan>
                                                       </text>
                                                  </>
                                             )
                                        }
                                   }}
                              />
                              {data.map((entry) => (
                                   <Cell key={`cell-${entry.name}`} fill={entry.color} />
                              ))}
                         </Pie>
                         {/* On hover show value */}
                         <ChartTooltip
                              formatter={(value: string) => `${value}`}
                         />
                    </PieChart>
               </ChartContainer>
          </>
     )
}

interface SponsorDonutChartProps {
     data: Sponsor[];
}

interface Sponsor {
     name: string;
     value: number;
     color: string;
     image: Image;
}
