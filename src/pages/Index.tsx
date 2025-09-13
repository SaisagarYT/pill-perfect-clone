import { AppLayout } from "@/components/layout/AppLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { PatientOverview } from "@/components/dashboard/PatientOverview";
import { PatientChart } from "@/components/dashboard/PatientChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { AppointmentCalendar } from "@/components/dashboard/AppointmentCalendar";
import { DoctorsSchedule } from "@/components/dashboard/DoctorsSchedule";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Users, Calendar, TrendingUp, Stethoscope } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Patients"
            value="1,287"
            change="+16.24%"
            changeType="positive"
            icon={<Users className="h-5 w-5" />}
          />
          <StatCard
            title="Total Patients"
            value="965"
            change="+16.24%"
            changeType="positive"
            icon={<Calendar className="h-5 w-5" />}
          />
          <StatCard
            title="Avg Check"
            value="138"
            change="+18.7%"
            changeType="negative"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <StatCard
            title="Total Doctors"
            value="315"
            change="+15.03%"
            changeType="positive"
            icon={<Stethoscope className="h-5 w-5" />}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <PatientOverview />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PatientChart />
              <RevenueChart />
              <DoctorsSchedule />
            </div>
          </div>

          {/* Right Column - Calendar & Activity */}
          <div className="space-y-6">
            <AppointmentCalendar />
            <RecentActivity />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
