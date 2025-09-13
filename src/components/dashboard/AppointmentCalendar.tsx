import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppointmentCalendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay();
  
  const days = [];
  
  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">{currentMonth} {currentYear}</CardTitle>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className={`
                text-center text-sm p-2 cursor-pointer rounded-md
                ${day === currentDate.getDate() ? 'bg-primary text-primary-foreground font-medium' : ''}
                ${day ? 'hover:bg-accent' : ''}
                ${!day ? 'cursor-default' : ''}
              `}
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Upcoming appointments */}
        <div className="mt-6 space-y-3">
          <h4 className="text-sm font-medium">Wednesday, 12 Jul</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-accent rounded-md">
              <div>
                <p className="text-sm font-medium">Virtual Consultation</p>
                <p className="text-xs text-muted-foreground">09:00 AM</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-accent rounded-md">
              <div>
                <p className="text-sm font-medium">Surgery: Cardiomyoplasty</p>
                <p className="text-xs text-muted-foreground">Surgery: Wednesday</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}