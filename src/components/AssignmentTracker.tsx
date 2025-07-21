import { Calendar, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  daysLeft: number;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'submitted' | 'graded';
  progress: number;
  maxScore: number;
  score?: number;
}

const assignments: Assignment[] = [
  {
    id: '1',
    title: 'Quadratic Equations Problem Set',
    subject: 'Mathematics',
    dueDate: '2024-01-25',
    daysLeft: 2,
    priority: 'high',
    status: 'in-progress',
    progress: 60,
    maxScore: 100
  },
  {
    id: '2',
    title: 'Physics Lab Report - Momentum',
    subject: 'Physics',
    dueDate: '2024-01-28',
    daysLeft: 5,
    priority: 'medium',
    status: 'pending',
    progress: 0,
    maxScore: 50
  },
  {
    id: '3',
    title: 'Essay on Climate Change',
    subject: 'English',
    dueDate: '2024-01-30',
    daysLeft: 7,
    priority: 'medium',
    status: 'pending',
    progress: 25,
    maxScore: 75
  },
  {
    id: '4',
    title: 'Chemical Bonding Quiz',
    subject: 'Chemistry',
    dueDate: '2024-01-22',
    daysLeft: -1,
    priority: 'high',
    status: 'graded',
    progress: 100,
    maxScore: 25,
    score: 23
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'destructive';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'secondary';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'submitted':
      return 'success';
    case 'in-progress':
      return 'warning';
    case 'graded':
      return 'success';
    case 'pending':
      return 'secondary';
    default:
      return 'secondary';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'submitted':
    case 'graded':
      return CheckCircle;
    case 'in-progress':
      return Clock;
    case 'pending':
      return Calendar;
    default:
      return Calendar;
  }
};

export function AssignmentTracker() {
  const pendingAssignments = assignments.filter(a => a.status === 'pending' || a.status === 'in-progress');
  const overdueAssignments = assignments.filter(a => a.daysLeft < 0 && a.status !== 'submitted' && a.status !== 'graded');

  return (
    <Card className="hover-lift fade-in-up stagger-4 border-0 shadow-card bg-gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Assignment Tracker</CardTitle>
          <div className="flex items-center gap-2">
            {overdueAssignments.length > 0 && (
              <Badge variant="destructive" className="text-xs">
                {overdueAssignments.length} Overdue
              </Badge>
            )}
            <Badge variant="secondary" className="text-xs">
              {pendingAssignments.length} Pending
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {assignments.map((assignment, index) => {
          const StatusIcon = getStatusIcon(assignment.status);
          const isOverdue = assignment.daysLeft < 0 && assignment.status !== 'submitted' && assignment.status !== 'graded';
          
          return (
            <div 
              key={assignment.id}
              className={`p-3 rounded-lg border ${isOverdue ? 'border-destructive/50 bg-destructive/5' : 'border-border/50'} hover:bg-muted/50 transition-colors bounce-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <StatusIcon className={`h-4 w-4 ${isOverdue ? 'text-destructive' : 'text-primary'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-foreground truncate">
                      {assignment.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityColor(assignment.priority) as any} className="text-xs">
                        {assignment.priority}
                      </Badge>
                      <Badge variant={getStatusColor(assignment.status) as any} className="text-xs">
                        {assignment.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground mb-2">
                    <span className="font-medium">{assignment.subject}</span>
                    <span className="mx-2">•</span>
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span className={isOverdue ? 'text-destructive font-medium' : ''}>
                      {isOverdue ? `${Math.abs(assignment.daysLeft)} days overdue` : 
                       assignment.daysLeft === 0 ? 'Due today' : 
                       `${assignment.daysLeft} days left`}
                    </span>
                  </div>
                  
                  {assignment.status === 'graded' && assignment.score !== undefined ? (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Score</span>
                      <Badge variant="success" className="text-xs">
                        {assignment.score}/{assignment.maxScore}
                      </Badge>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{assignment.progress}%</span>
                      </div>
                      <Progress value={assignment.progress} className="h-1.5" />
                    </div>
                  )}
                </div>
              </div>
              
              {assignment.status === 'in-progress' && (
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="default" className="text-xs">
                    Continue Work
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    Submit
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}