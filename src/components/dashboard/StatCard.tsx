import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  changeType = "positive", 
  icon,
  className 
}: StatCardProps) {
  return (
    <Card className={cn("p-6", className)}>
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <p className="text-2xl font-bold text-foreground">
              {value}
            </p>
            {change && (
              <p className={cn(
                "text-xs font-medium mt-1",
                changeType === "positive" ? "text-success" : "text-destructive"
              )}>
                {change}
              </p>
            )}
          </div>
          {icon && (
            <div className="text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}