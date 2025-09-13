import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Yaya Woodbury",
    specialty: "General Medicine",
    status: "Available",
    avatar: "/placeholder.svg",
    nextAppointment: "10:00 AM"
  },
  {
    id: 2,
    name: "Dr. Amanda Kally",
    specialty: "Cardiology",
    status: "Emergency",
    avatar: "/placeholder.svg",
    nextAppointment: "11:30 AM"
  },
  {
    id: 3,
    name: "Dr. Maria Wilson",
    specialty: "Pediatrics", 
    status: "Available",
    avatar: "/placeholder.svg",
    nextAppointment: "02:00 PM"
  },
  {
    id: 4,
    name: "Dr. David Johnson",
    specialty: "Dermatology",
    status: "Break",
    avatar: "/placeholder.svg",
    nextAppointment: "03:30 PM"
  },
  {
    id: 5,
    name: "Dr. Sarah Morgan",
    specialty: "Neurology",
    status: "Emergency",
    avatar: "/placeholder.svg",
    nextAppointment: "04:00 PM"
  }
];

export function DoctorsSchedule() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Doctor's Schedule</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={doctor.avatar} />
                <AvatarFallback className="bg-muted">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{doctor.name}</p>
                <p className="text-xs text-muted-foreground">{doctor.specialty}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={
                  doctor.status === "Available" ? "default" : 
                  doctor.status === "Emergency" ? "destructive" : 
                  "warning"
                }
                className="text-xs"
              >
                {doctor.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{doctor.nextAppointment}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}