import { Heart, Code, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using</span>
            <div className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span className="font-semibold">Lovable</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <span>PWA Enabled</span>
            </div>
            <span>•</span>
            <span>EduApp © 2024</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            This is a demo application showcasing modern web development with PWA capabilities.
            <br />
            Features include offline support, push notifications, and responsive design.
          </p>
        </div>
      </div>
    </footer>
  );
}