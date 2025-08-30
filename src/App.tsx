import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
import MainLayout from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Employees from "@/pages/Employees";
import Attendance from "@/pages/Attendance";
import Leave from "@/pages/Leave";
import Payroll from "@/pages/Payroll";
import Expenses from "@/pages/Expenses";
import Performance from "@/pages/Performance";
import Projects from "@/pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
