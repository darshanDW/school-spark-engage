import { TrendingUp, TrendingDown, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Subject {
  id: string;
  name: string;
  grade: string;
  percentage: number;
  trend: 'up' | 'down' | 'stable';
  credits: number;
  teacher: string;
}

const subjects: Subject[] = [
  {
    id: '1',
    name: 'Mathematics',
    grade: 'A',
    percentage: 92,
    trend: 'up',
    credits: 4,
    teacher: 'Ms. Johnson'
  },
  {
    id: '2',
    name: 'Physics',
    grade: 'A-',
    percentage: 88,
    trend: 'stable',
    credits: 4,
    teacher: 'Mr. Davis'
  },
  {
    id: '3',
    name: 'Chemistry',
    grade: 'B+',
    percentage: 85,
    trend: 'up',
    credits: 4,
    teacher: 'Dr. Brown'
  },
  {
    id: '4',
    name: 'English',
    grade: 'A-',
    percentage: 90,
    trend: 'down',
    credits: 3,
    teacher: 'Ms. Wilson'
  },
  {
    id: '5',
    name: 'History',
    grade: 'B+',
    percentage: 87,
    trend: 'up',
    credits: 3,
    teacher: 'Mr. Smith'
  }
];

const getGradeColor = (grade: string) => {
  if (grade.startsWith('A')) return 'success';
  if (grade.startsWith('B')) return 'warning';
  if (grade.startsWith('C')) return 'secondary';
  return 'destructive';
};

export function GradesSummary() {
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
  const weightedGPA = subjects.reduce((sum, subject) => sum + (subject.percentage * subject.credits), 0) / (totalCredits * 100) * 4;

  return (
    <Card className="hover-lift fade-in-up stagger-3 border-0 shadow-card bg-gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Academic Performance</CardTitle>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-warning" />
            <span className="text-sm font-semibold">GPA: {weightedGPA.toFixed(2)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {subjects.map((subject, index) => (
          <div 
            key={subject.id}
            className={`p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors bounce-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h4 className="text-sm font-medium text-foreground">{subject.name}</h4>
                <Badge variant={getGradeColor(subject.grade) as any} className="text-xs">
                  {subject.grade}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">{subject.percentage}%</span>
                {subject.trend === 'up' && <TrendingUp className="h-3 w-3 text-success" />}
                {subject.trend === 'down' && <TrendingDown className="h-3 w-3 text-destructive" />}
              </div>
            </div>
            
            <div className="space-y-2">
              <Progress value={subject.percentage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{subject.teacher}</span>
                <span>{subject.credits} credits</span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Overall Performance</span>
            <Badge variant="success" className="text-sm">
              Excellent Standing
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}