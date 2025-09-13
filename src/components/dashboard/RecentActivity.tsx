import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    patient: "Tom Smith was discharged from Surgery Room 3",
    time: "2 min ago",
    type: "discharge"
  },
  {
    id: 2,
    patient: "Ella Williams was admitted to Room 14 for emergency consultation after...",
    time: "5 min ago",
    type: "admission"
  },
  {
    id: 3,
    patient: "Will Williams has Radiology Department booked scheduled for next...",
    time: "12 min ago",
    type: "appointment"
  },
  {
    id: 4,
    patient: "Lily Brown emergency response required to patient admitted in Room 8",
    time: "1 hour ago",
    type: "emergency"
  },
  {
    id: 5,
    patient: "Clark Kent emergency response required to patient admitted in Room 12",
    time: "2 hours ago",
    type: "emergency"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              activity.type === 'emergency' ? 'bg-destructive' :
              activity.type === 'admission' ? 'bg-warning' :
              activity.type === 'discharge' ? 'bg-success' :
              'bg-primary'
            }`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.patient}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}