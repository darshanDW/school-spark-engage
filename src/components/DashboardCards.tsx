import { BookOpen, Calendar, Clock, GraduationCap, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: 'up' | 'down';
  color: 'primary' | 'secondary' | 'success' | 'warning';
}

const stats: StatCard[] = [
  {
    title: "Overall GPA",
    value: "3.85",
    change: "+0.15",
    icon: GraduationCap,
    trend: 'up',
    color: 'primary'
  },
  {
    title: "Assignments Due",
    value: "5",
    change: "-2",
    icon: BookOpen,
    trend: 'down',
    color: 'warning'
  },
  {
    title: "Attendance",
    value: "94%",
    change: "+2%",
    icon: Calendar,
    trend: 'up',
    color: 'success'
  },
  {
    title: "Study Hours",
    value: "28h",
    change: "+4h",
    icon: Clock,
    trend: 'up',
    color: 'secondary'
  }
];

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title}
          className={`hover-lift fade-in-up stagger-${index + 1} border-0 shadow-card bg-gradient-card`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-${stat.color} bg-opacity-10`}>
              <stat.icon className={`h-4 w-4 text-${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <Badge 
                variant={stat.trend === 'up' ? 'success' : 'warning'}
                className="text-xs"
              >
                {stat.change}
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <TrendingUp className={`h-3 w-3 ${stat.trend === 'up' ? 'text-success' : 'text-warning rotate-180'}`} />
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}