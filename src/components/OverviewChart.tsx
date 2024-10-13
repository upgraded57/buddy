import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export default function OverviewChart() {
  const chartData = [
    { month: "January", purchaseValue: 650, marketValue: 700 },
    { month: "February", purchaseValue: 350, marketValue: 450 },
    { month: "March", purchaseValue: 550, marketValue: 450 },
    { month: "April", purchaseValue: 350, marketValue: 550 },
    { month: "May", purchaseValue: 500, marketValue: 575 },
    { month: "June", purchaseValue: 625, marketValue: 850 },
    { month: "July", purchaseValue: 475, marketValue: 700 },
    { month: "August", purchaseValue: 450, marketValue: 615 },
    { month: "September", purchaseValue: 350, marketValue: 450 },
    { month: "October", purchaseValue: 500, marketValue: 700 },
    { month: "November", purchaseValue: 375, marketValue: 300 },
    { month: "December", purchaseValue: 500, marketValue: 600 },
  ];
  const chartConfig = {
    purchaseValue: {
      label: "Purchase Value",
      color: "#FFB800",
    },
    marketValue: {
      label: "Market Value",
      color: "#FF8600",
    },
  };
  return (
    <div className="w-full h-[250px] pr-6">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} domain={[200, "auto"]} />
          <ChartTooltip
            cursor={true}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="purchaseValue" fill="#FFB800" radius={0} barSize={12} />
          <Bar dataKey="marketValue" fill="#FF8600" radius={0} barSize={12} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
