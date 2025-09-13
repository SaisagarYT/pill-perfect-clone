import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Stethoscope, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Settings, 
  MessageSquare,
  Pill,
  Heart
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Patients", href: "/patients", icon: Users },
  { name: "Doctors", href: "/doctors", icon: Stethoscope },
  { name: "Prescriptions", href: "/prescriptions", icon: FileText },
  { name: "Inventory", href: "/inventory", icon: Pill },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r border-border">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">WellNest</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-4">
        <div className="rounded-lg bg-accent p-4">
          <h4 className="text-sm font-medium text-accent-foreground mb-2">
            Unlock New Features
          </h4>
          <p className="text-xs text-muted-foreground mb-3">
            A Smarter Way for Hospital Management Efficiency
          </p>
          <button className="w-full rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary-hover transition-colors">
            Upgrade Now!
          </button>
        </div>
      </div>
    </div>
  );
}