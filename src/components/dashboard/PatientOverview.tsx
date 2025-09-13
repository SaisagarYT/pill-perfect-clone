import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", patients: 120 },
  { month: "Feb", patients: 190 },
  { month: "Mar", patients: 150 },
  { month: "Apr", patients: 220 },
  { month: "May", patients: 180 },
  { month: "Jun", patients: 250 },
  { month: "Jul", patients: 280 },
];

export function PatientOverview() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Patient Overview</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-xs">
            Last 6 Months
          </Button>
          <Button size="sm" className="text-xs">
            This Month
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <YAxis hide />
              <Bar 
                dataKey="patients" 
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}