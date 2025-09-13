import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Emergency Patients", value: 30, color: "#ef4444" },
  { name: "Outpatient", value: 45, color: "#3b82f6" },
  { name: "Inpatient", value: 25, color: "#10b981" },
];

export function PatientChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Patient Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={50}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 ml-6">
            <div className="text-center mb-4">
              <p className="text-2xl font-bold">1,500</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </div>
            <div className="space-y-2">
              {data.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}