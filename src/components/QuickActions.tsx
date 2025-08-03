import { 
  BookOpen, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Users, 
  Library,
  Bell,
  Camera
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickAction {
  title: string;
  description: string;
  icon: React.ElementType;
  color: 'primary' | 'secondary' | 'success' | 'warning';
  action?: () => void;
}

interface QuickActionsProps {
  onSendNotification: () => void;
}
const onSendNotification=()=>{
  console.log("Demo notification sent!");
}

export function QuickActions({ onSendNotification }: QuickActionsProps) {
  const actions: QuickAction[] = [
    {
      title: "Assignments",
      description: "View and submit",
      icon: FileText,
      color: 'primary'
    },
    {
      title: "Schedule",
      description: "Today's classes",
      icon: Calendar,
      color: 'secondary'
    },
    {
      title: "Grades",
      description: "Check results",
      icon: BookOpen,
      color: 'success'
    },
    {
      title: "Messages",
      description: "Teacher notes",
      icon: MessageSquare,
      color: 'warning'
    },
    {
      title: "Study Groups",
      description: "Join sessions",
      icon: Users,
      color: 'primary'
    },
    {
      title: "Library",
      description: "Digital resources",
      icon: Library,
      color: 'secondary'
    },
    {
      title: "Send Demo Alert",
      description: "Test notification",
      icon: Bell,
      color: 'warning',
      action: onSendNotification
    },
    {
      title: "Campus Life",
      description: "Events & photos",
      icon: Camera,
      color: 'success'
    }
  ];

  return (
    <Card className="hover-lift fade-in-up stagger-3 border-0 shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <Button
              key={action.title}
              variant="ghost"
              className={`h-auto flex flex-col items-center gap-3 p-4 hover-lift transition-all duration-300 hover:bg-opacity-10 bounce-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={action.action}
            >
              <div className={`p-3 rounded-xl bg-${action.color} bg-opacity-10`}>
                <action.icon className={`h-6 w-6 text-${action.color}`} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">{action.title}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}