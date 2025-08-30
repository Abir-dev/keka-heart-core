import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Users,
  Clock,
  DollarSign,
  Target,
  FolderOpen,
  Home,
  UserCheck,
  Calendar,
  FileText,
  TrendingUp,
  Settings,
  Building2
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    roles: ['global_admin', 'hr_manager', 'payroll_admin', 'hr_executive', 'employee']
  },
  {
    title: "Employees",
    url: "/employees",
    icon: Users,
    roles: ['global_admin', 'hr_manager', 'hr_executive']
  },
  {
    title: "My Profile",
    url: "/profile",
    icon: UserCheck,
    roles: ['employee']
  },
  {
    title: "Attendance",
    url: "/attendance",
    icon: Clock,
    roles: ['global_admin', 'hr_manager', 'hr_executive', 'employee']
  },
  {
    title: "Leave Management",
    url: "/leave",
    icon: Calendar,
    roles: ['global_admin', 'hr_manager', 'hr_executive', 'employee']
  },
  {
    title: "Payroll",
    url: "/payroll",
    icon: DollarSign,
    roles: ['global_admin', 'hr_manager', 'payroll_admin']
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: FileText,
    roles: ['global_admin', 'hr_manager', 'payroll_admin', 'employee']
  },
  {
    title: "Performance",
    url: "/performance",
    icon: Target,
    roles: ['global_admin', 'hr_manager', 'performance_admin', 'employee']
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
    roles: ['global_admin', 'project_admin', 'employee']
  },
  {
    title: "Reports",
    url: "/reports",
    icon: TrendingUp,
    roles: ['global_admin', 'hr_manager', 'payroll_admin']
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    roles: ['global_admin', 'hr_manager']
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname;

  const filteredItems = navigationItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        {/* Logo/Brand */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <Building2 className="h-5 w-5" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-bold text-sidebar-foreground">HRMS</h2>
                <p className="text-xs text-sidebar-foreground/70">Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Info */}
        {!isCollapsed && user && (
          <div className="mt-auto p-4 border-t border-sidebar-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  {user.name}
                </p>
                <p className="text-xs text-sidebar-foreground/70 truncate">
                  {user.position}
                </p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}