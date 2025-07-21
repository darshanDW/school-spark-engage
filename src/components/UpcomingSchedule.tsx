import { Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScheduleItem {
  id: string;
  subject: string;
  teacher: string;
  time: string;
  room: string;
  type: 'lecture' | 'lab' | 'exam' | 'break';
  status: 'upcoming' | 'current' | 'completed';
}

const schedule: ScheduleItem[] = [
  {
    id: '1',
    subject: 'Mathematics',
    teacher: 'Ms. Johnson',
    time: '09:00 - 09:45',
    room: 'Room 201',
    type: 'lecture',
    status: 'upcoming'
  },
  {
    id: '2',
    subject: 'Physics Lab',
    teacher: 'Mr. Davis',
    time: '10:00 - 11:30',
    room: 'Lab 101',
    type: 'lab',
    status: 'upcoming'
  },
  {
    id: '3',
    subject: 'English Literature',
    teacher: 'Ms. Wilson',
    time: '12:00 - 12:45',
    room: 'Room 305',
    type: 'lecture',
    status: 'upcoming'
  },
  {
    id: '4',
    subject: 'Chemistry Exam',
    teacher: 'Dr. Brown',
    time: '14:00 - 15:30',
    room: 'Exam Hall',
    type: 'exam',
    status: 'upcoming'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'lecture':
      return 'default';
    case 'lab':
      return 'secondary';
    case 'exam':
      return 'warning';
    case 'break':
      return 'success';
    default:
      return 'default';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'current':
      return 'success';
    case 'upcoming':
      return 'default';
    case 'completed':
      return 'secondary';
    default:
      return 'default';
  }
};

export function UpcomingSchedule() {
  return (
    <Card className="hover-lift fade-in-up stagger-2 border-0 shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Today's Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedule.map((item, index) => (
          <div 
            key={item.id}
            className={`flex items-center gap-4 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors bounce-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-foreground">
                  {item.subject}
                </h4>
                <div className="flex gap-1">
                  <Badge variant={getTypeColor(item.type) as any} className="text-xs">
                    {item.type}
                  </Badge>
                  {item.status === 'current' && (
                    <Badge variant="success" className="text-xs animate-pulse">
                      Live
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{item.teacher}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{item.room}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}