import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();
function toggleNightMode() {
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
const NightModeButton = () => (
  <button
  onClick={toggleNightMode}
  style={{
    position: "fixed",
    top: 16,
    right: 16,
    zIndex: 9999,
    padding: "8px 16px",
    borderRadius: 8,
    background: "#222",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 20,
  }}
  aria-label="Toggle night mode"
>
 {document.documentElement.classList.contains("dark") ? "🌙" : "☀️" }  Mode
</button>
);
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
                  <NightModeButton />

        <Routes>
          
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
