import { Employee, TimelineEvent } from '@/types/employee';
import { AttendanceRecord, LeaveRequest, LeaveBalance } from '@/types/attendance';
import { PayrollRun, Payslip, ExpenseClaim } from '@/types/payroll';
import { PerformanceReview, Goal, OKR } from '@/types/performance';
import { Project, Task, TimesheetEntry } from '@/types/projects';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 123-4567',
    position: 'System Administrator',
    department: 'IT',
    manager: 'David Wilson',
    joinDate: '2022-01-15',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c8d6?w=150&h=150&fit=crop&crop=face',
    personalInfo: {
      dateOfBirth: '1990-05-12',
      address: '123 Main St, New York, NY 10001',
      emergencyContact: '+1 (555) 987-6543',
      bloodGroup: 'O+'
    },
    workInfo: {
      workLocation: 'New York Office',
      employmentType: 'full-time',
      salary: 75000,
      benefits: ['Health Insurance', 'Dental', '401k', 'Flexible PTO']
    },
    timeline: [
      {
        id: '1',
        date: '2024-01-15',
        type: 'review',
        title: 'Annual Performance Review',
        description: 'Exceeded expectations in system administration and security'
      },
      {
        id: '2',
        date: '2023-06-01',
        type: 'promotion',
        title: 'Promoted to Senior System Administrator',
        description: 'Recognition for outstanding performance and leadership'
      }
    ]
  },
  {
    id: '2',
    employeeId: 'EMP002',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    phone: '+1 (555) 234-5678',
    position: 'HR Manager',
    department: 'Human Resources',
    manager: 'Lisa Thompson',
    joinDate: '2021-03-10',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    personalInfo: {
      dateOfBirth: '1988-09-22',
      address: '456 Oak Ave, San Francisco, CA 94102',
      emergencyContact: '+1 (555) 876-5432',
      bloodGroup: 'A+'
    },
    workInfo: {
      workLocation: 'San Francisco Office',
      employmentType: 'full-time',
      salary: 85000,
      benefits: ['Health Insurance', 'Dental', '401k', 'Stock Options']
    },
    timeline: [
      {
        id: '3',
        date: '2024-02-01',
        type: 'training',
        title: 'Leadership Development Program',
        description: 'Completed advanced management training'
      }
    ]
  },
  {
    id: '3',
    employeeId: 'EMP003',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    phone: '+1 (555) 345-6789',
    position: 'Payroll Administrator',
    department: 'Finance',
    manager: 'Robert Kim',
    joinDate: '2023-01-05',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    personalInfo: {
      dateOfBirth: '1992-11-08',
      address: '789 Pine St, Austin, TX 78701',
      emergencyContact: '+1 (555) 765-4321',
      bloodGroup: 'B+'
    },
    workInfo: {
      workLocation: 'Austin Office',
      employmentType: 'full-time',
      salary: 65000,
      benefits: ['Health Insurance', 'Dental', '401k']
    },
    timeline: []
  }
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    date: '2024-01-15',
    clockIn: '09:00',
    clockOut: '17:30',
    totalHours: 8.5,
    overtimeHours: 0.5,
    status: 'present',
    method: 'biometric',
    location: 'New York Office'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    date: '2024-01-15',
    clockIn: '08:45',
    clockOut: '17:15',
    totalHours: 8.5,
    overtimeHours: 0.5,
    status: 'present',
    method: 'geo',
    location: 'San Francisco Office'
  }
];

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    type: 'vacation',
    startDate: '2024-02-15',
    endDate: '2024-02-19',
    days: 5,
    reason: 'Family vacation',
    status: 'approved',
    approver: 'David Wilson',
    appliedDate: '2024-01-20'
  },
  {
    id: '2',
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    type: 'sick',
    startDate: '2024-01-18',
    endDate: '2024-01-18',
    days: 1,
    reason: 'Flu symptoms',
    status: 'pending',
    appliedDate: '2024-01-18'
  }
];

export const mockPayrollRuns: PayrollRun[] = [
  {
    id: '1',
    month: 'January',
    year: 2024,
    status: 'completed',
    totalEmployees: 150,
    totalAmount: 1250000,
    createdDate: '2024-01-31',
    processedBy: 'Emily Rodriguez'
  },
  {
    id: '2',
    month: 'December',
    year: 2023,
    status: 'paid',
    totalEmployees: 148,
    totalAmount: 1180000,
    createdDate: '2023-12-31',
    processedBy: 'Emily Rodriguez'
  }
];

export const mockExpenses: ExpenseClaim[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    category: 'Travel',
    amount: 450.00,
    description: 'Client visit - flight and accommodation',
    date: '2024-01-10',
    status: 'approved',
    approver: 'David Wilson',
    receipts: ['receipt1.pdf', 'receipt2.pdf']
  },
  {
    id: '2',
    employeeId: 'EMP002',
    employeeName: 'Michael Chen',
    category: 'Meals',
    amount: 85.50,
    description: 'Team lunch meeting',
    date: '2024-01-12',
    status: 'pending',
    receipts: ['receipt3.pdf']
  }
];

export const mockPerformanceReviews: PerformanceReview[] = [
  {
    id: '1',
    employeeId: 'EMP001',
    employeeName: 'Sarah Johnson',
    reviewPeriod: 'Q4 2023',
    reviewType: 'quarterly',
    overallRating: 4.5,
    goals: [
      {
        id: '1',
        title: 'Improve System Security',
        description: 'Implement advanced security protocols',
        category: 'performance',
        targetDate: '2024-03-31',
        status: 'in-progress',
        progress: 75,
        weight: 40
      }
    ],
    feedback: [
      {
        id: '1',
        category: 'Technical Skills',
        rating: 5,
        comments: 'Exceptional technical expertise',
        reviewer: 'David Wilson',
        reviewerRole: 'Manager'
      }
    ],
    status: 'completed',
    reviewDate: '2024-01-15',
    reviewer: 'David Wilson'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'HRMS Platform',
    description: 'Complete HR management system development',
    client: 'Internal',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    budget: 500000,
    billableHours: 1200,
    nonBillableHours: 300,
    teamMembers: ['EMP001', 'EMP002', 'EMP003'],
    manager: 'Sarah Johnson',
    progress: 45
  },
  {
    id: '2',
    name: 'Customer Portal',
    description: 'Self-service customer portal development',
    client: 'Acme Corp',
    status: 'planning',
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    budget: 300000,
    billableHours: 800,
    nonBillableHours: 150,
    teamMembers: ['EMP002', 'EMP003'],
    manager: 'Michael Chen',
    progress: 10
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    projectId: '1',
    name: 'Database Design',
    description: 'Design the database schema for HRMS',
    assignee: 'Sarah Johnson',
    status: 'completed',
    priority: 'high',
    estimatedHours: 40,
    actualHours: 38,
    billable: true,
    startDate: '2024-01-01',
    dueDate: '2024-01-15'
  },
  {
    id: '2',
    projectId: '1',
    name: 'User Interface Development',
    description: 'Develop the main user interface components',
    assignee: 'Michael Chen',
    status: 'in-progress',
    priority: 'medium',
    estimatedHours: 60,
    actualHours: 25,
    billable: true,
    startDate: '2024-01-10',
    dueDate: '2024-02-10'
  }
];