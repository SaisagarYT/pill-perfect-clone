import { AppLayout } from "@/components/layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal, Star, Phone, Mail, MessageSquare, Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const doctors = [
  {
    id: 1,
    name: "Dr. Yaya Woodbury",
    wmid: "WMID 261",
    specialty: "General Medicine",
    nextSpecialist: "Routine Check-Ups",
    experience: "10y",
    rating: 4.9,
    patientCount: 15,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Dr. Olivia Martinez",
    wmid: "WMID 262",
    specialty: "Cardiology",
    nextSpecialist: "Heart Specialist",
    experience: "8y",
    rating: 4.8,
    patientCount: 8,
    status: "Emergency",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Dr. Damien Saunders",
    wmid: "WMID 263",
    specialty: "Pediatrics",
    nextSpecialist: "Child health",
    experience: "12y",
    rating: 4.9,
    patientCount: 22,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Dr. Omar Harrington",
    wmid: "WMID 264",
    specialty: "Dermatology",
    nextSpecialist: "Skin Specialist",
    experience: "6y",
    rating: 4.7,
    patientCount: 8,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Dr. Emily Smith",
    wmid: "WMID 265",
    specialty: "General Medicine",
    nextSpecialist: "Routine Check-Ups",
    experience: "15y",
    rating: 4.9,
    patientCount: 9,
    status: "Emergency",
    avatar: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Dr. Samuel Thompson",
    wmid: "WMID 266",
    specialty: "Cardiology",
    nextSpecialist: "Heart Specialist",
    experience: "11y",
    rating: 4.8,
    patientCount: 14,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 7,
    name: "Dr. Sarah Johnson",
    wmid: "WMID 267",
    specialty: "Pediatrics",
    nextSpecialist: "Child health",
    experience: "9y",
    rating: 4.9,
    patientCount: 5,
    status: "Emergency",
    avatar: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Dr. Luke Harrison",
    wmid: "WMID 268",
    specialty: "Dermatology",
    nextSpecialist: "Skin Specialist",
    experience: "7y",
    rating: 4.6,
    patientCount: 18,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 9,
    name: "Dr. Sabrina Peterson",
    wmid: "WMID 269",
    specialty: "Internal Medicine",
    nextSpecialist: "Internal health",
    experience: "13y",
    rating: 4.8,
    patientCount: 11,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 10,
    name: "Dr. William Carter",
    wmid: "WMID 270",
    specialty: "Pediatrics",
    nextSpecialist: "Child health",
    experience: "16y",
    rating: 4.9,
    patientCount: 12,
    status: "Available",
    avatar: "/placeholder.svg"
  },
  {
    id: 11,
    name: "Dr. Mark Gibson",
    wmid: "WMID 271",
    specialty: "Orthopedics",
    nextSpecialist: "Bone Specialist",
    experience: "14y",
    rating: 4.7,
    patientCount: 3,
    status: "Emergency",
    avatar: "/placeholder.svg"
  },
  {
    id: 12,
    name: "Dr. Thomas Brown",
    wmid: "WMID 272",
    specialty: "Neurology",
    nextSpecialist: "Brain Specialist",
    experience: "18y",
    rating: 4.9,
    patientCount: 11,
    status: "Available",
    avatar: "/placeholder.svg"
  }
];

export default function Doctors() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Doctors</h1>
          </div>
          <Button className="lg:ml-4 mt-4 lg:mt-0">
            Add new doctor
          </Button>
        </div>

        <Card>
          {/* Filters */}
          <div className="p-6 border-b border-border">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search name, ID, etc."
                  className="pl-10 bg-secondary border-none"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Department
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Specialist
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Status
                </Button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="font-medium text-muted-foreground">Doctor Details</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Department</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Specialist</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Experience</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Patients</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Available Shift</TableHead>
                  <TableHead className="font-medium text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors.map((doctor) => (
                  <TableRow key={doctor.id} className="border-border">
                    <TableCell className="py-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={doctor.avatar} />
                          <AvatarFallback className="bg-muted">
                            {doctor.name.split(' ').map(n => n[1] || n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{doctor.name}</p>
                          <p className="text-sm text-muted-foreground">{doctor.wmid}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">{doctor.specialty}</TableCell>
                    <TableCell className="text-foreground">{doctor.nextSpecialist}</TableCell>
                    <TableCell className="text-foreground">{doctor.experience}</TableCell>
                    <TableCell className="text-foreground">{doctor.patientCount}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={doctor.status === "Available" ? "default" : "destructive"}
                        className="text-xs"
                      >
                        {doctor.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Calendar className="mr-2 h-4 w-4" />
                              Schedule
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Edit Details
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Showing 12 results
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}