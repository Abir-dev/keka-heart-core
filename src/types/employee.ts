export interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  manager: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'terminated';
  avatar?: string;
  personalInfo: {
    dateOfBirth: string;
    address: string;
    emergencyContact: string;
    bloodGroup: string;
  };
  workInfo: {
    workLocation: string;
    employmentType: 'full-time' | 'part-time' | 'contract';
    salary: number;
    benefits: string[];
  };
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'joined' | 'promotion' | 'review' | 'leave' | 'training' | 'note';
  title: string;
  description: string;
  isPrivate?: boolean;
}

export interface Document {
  id: string;
  employeeId: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
  url: string;
}