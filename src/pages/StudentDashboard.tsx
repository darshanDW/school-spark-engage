import { useEffect, useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardCards } from "@/components/DashboardCards";
import { QuickActions } from "@/components/QuickActions";
import { RecentActivity } from "@/components/RecentActivity";
import { UpcomingSchedule } from "@/components/UpcomingSchedule";
import { GradesSummary } from "@/components/GradesSummary";
import { AssignmentTracker } from "@/components/AssignmentTracker";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { Footer } from "@/components/Footer";
import { NotificationService } from "@/utils/notifications";
import { useToast } from "@/hooks/use-toast";

export function StudentDashboard() {
  const [notificationService] = useState(() => NotificationService.getInstance());
  const { toast } = useToast();

  useEffect(() => {
    // Initialize PWA and notifications
    const initApp = async () => {
      const serviceWorkerRegistered = await notificationService.init();
      
      if (serviceWorkerRegistered) {
        console.log('PWA features initialized successfully');
      }
    };

    initApp();
  }, [notificationService]);

  const handleSendNotification = async () => {
    try {
      await notificationService.sendDemoNotification();
      toast({
        title: "Demo notification sent! 🎓",
        description: "Check your browser notifications to see the demo.",
      });
    } catch (error) {
      console.error('Error sending notification:', error);
      toast({
        title: "Notification failed",
        description: "Please allow notifications in your browser settings.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader onNotificationClick={handleSendNotification} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Welcome Section */}
        <div className="text-center mb-8 fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John! 👋
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening with your studies today
          </p>
        </div>

        {/* Stats Cards */}
        <DashboardCards />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <QuickActions onSendNotification={handleSendNotification} />
            <AssignmentTracker />
            <RecentActivity />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <UpcomingSchedule />
            <GradesSummary />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
    </div>
  );
}