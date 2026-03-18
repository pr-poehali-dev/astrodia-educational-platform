import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import Methodology from "./pages/Methodology";
import Author from "./pages/Author";
import SectionPage from "./pages/SectionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/author" element={<Author />} />
          <Route path="/ancient-russian" element={<SectionPage section="ancient-russian" />} />
          <Route path="/western" element={<SectionPage section="western" />} />
          <Route path="/medical" element={<SectionPage section="medical" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
