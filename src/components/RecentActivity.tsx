import { Clock, CheckCircle, AlertCircle, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Activity {
  id: string;
  type: 'assignment' | 'grade' | 'announcement' | 'message';
  title: string;
  description: string;
  time: string;
  status?: 'completed' | 'pending' | 'overdue';
  teacher?: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'assignment',
    title: 'Math Assignment #5',
    description: 'Algebra equations and quadratic functions',
    time: '2 hours ago',
    status: 'pending',
    teacher: 'Ms. Johnson'
  },
  {
    id: '2',
    type: 'grade',
    title: 'Science Quiz Result',
    description: 'You scored 95% on the Biology quiz',
    time: '4 hours ago',
    status: 'completed',
    teacher: 'Mr. Davis'
  },
  {
    id: '3',
    type: 'announcement',
    title: 'School Event',
    description: 'Science Fair registration is now open',
    time: '1 day ago',
    teacher: 'Administration'
  },
  {
    id: '4',
    type: 'message',
    title: 'Teacher Message',
    description: 'Great work on your presentation!',
    time: '2 days ago',
    teacher: 'Ms. Wilson'
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'assignment':
      return BookOpen;
    case 'grade':
      return CheckCircle;
    case 'announcement':
      return AlertCircle;
    case 'message':
      return Clock;
    default:
      return Clock;
  }
};

const getStatusBadge = (status?: string) => {
  switch (status) {
    case 'completed':
      return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case 'pending':
      return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    case 'overdue':
      return <Badge variant="destructive">Overdue</Badge>;
    default:
      return null;
  }
};

export function RecentActivity() {
  return (
    <Card className="hover-lift fade-in-up stagger-4 border-0 shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = getActivityIcon(activity.type);
          
          return (
            <div 
              key={activity.id}
              className={`flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors bounce-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </h4>
                  {getStatusBadge(activity.status)}
                </div>
                
                <p className="text-xs text-muted-foreground mb-2">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Avatar className="h-4 w-4">
                      <AvatarFallback className="text-xs bg-secondary">
                        {activity.teacher?.charAt(0) || 'A'}
                      </AvatarFallback>
                    </Avatar>
                    <span>{activity.teacher}</span>
                  </div>
                  <span className="text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}