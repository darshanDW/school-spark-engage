import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { NightModeButton } from "@/App";
interface DashboardHeaderProps {
  onNotificationClick: () => void;
}

export function DashboardHeader({ onNotificationClick }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EduApp</h1>
                <p className="text-xs text-muted-foreground">Student Portal</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary hidden md:block"
              />
            </div>
            
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={onNotificationClick}
                className="hover-lift"
              >
                <Bell className="h-5 w-5" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  
                </Badge>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg" alt="Student" />
                <AvatarFallback className="bg-gradient-secondary text-white">
                  JS
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">John Smith</p>
                <p className="text-xs text-muted-foreground">Grade 11A</p>
              </div>
            </div>
            
          </div>
          <div>
              <NightModeButton />
            </div>
        </div>
      </div>
    </header>
  );
}