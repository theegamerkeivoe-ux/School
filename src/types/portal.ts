export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export interface User {
  id: string;
  username: string;
  name: string;
  role: UserRole;
  email: string;
  phone?: string;
  avatar?: string;
  linkedStudentIds?: string[]; // For parents
  teacherId?: string; // For teachers
  studentId?: string; // For students
}

export interface Student {
  id: string;
  admissionNumber: string;
  fullName: string;
  dateOfBirth: string;
  form: 'Form 1' | 'Form 2' | 'Form 3' | 'Form 4';
  stream: 'Green' | 'Gold' | 'White';
  gender: 'Female';
  dormitory: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianRelationship: string;
  enrollmentDate: string;
  status: 'Active' | 'Archived' | 'Alumni';
  attendanceRate: number; // e.g. 97.5%
  feeBalance: number;
  totalFees: number;
  photoUrl?: string;
}

export interface Teacher {
  id: string;
  staffId: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  assignedClasses: string[]; // e.g. ["Form 2 Green", "Form 3 Gold"]
  subjectsTaught: string[]; // e.g. ["Mathematics", "Physics"]
  photoUrl?: string;
  status: 'Active' | 'On Leave' | 'Inactive';
}

export interface Parent {
  id: string;
  parentId: string;
  fullName: string;
  phone: string;
  email: string;
  linkedStudentIds: string[];
  nationalId: string;
  relationship: 'Mother' | 'Father' | 'Guardian';
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  category: 'Sciences' | 'Mathematics' | 'Languages' | 'Humanities' | 'Technical';
  hod: string;
}

export interface AcademicRecord {
  id: string;
  studentId: string;
  studentName: string;
  admissionNumber: string;
  form: string;
  term: 'Term 1' | 'Term 2' | 'Term 3';
  year: number;
  subjects: {
    subjectName: string;
    catMark: number; // /30
    examMark: number; // /70
    totalMark: number; // /100
    grade: string;
    remarks: string;
    teacherName: string;
  }[];
  totalMarks: number;
  averageMarks: number;
  meanGrade: string;
  principalRemarks: string;
  classTeacherRemarks: string;
  status: 'Draft' | 'Submitted' | 'Approved' | 'Published';
}

export interface TimetableSlot {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string;
  form: string;
  stream: string;
  subject: string;
  teacher: string;
  room: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  form: string;
  stream: string;
  teacherName: string;
  dateAssigned: string;
  dueDate: string;
  instructions: string;
  attachmentName?: string;
  submissionsCount?: number;
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  studentName: string;
  submissionDate: string;
  fileName: string;
  status: 'Submitted' | 'Graded' | 'Pending';
  score?: number;
  feedback?: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  form: string;
  stream: string;
  studentId: string;
  studentName: string;
  status: 'Present' | 'Absent' | 'Late';
  remarks?: string;
  recordedBy: string;
  modifiedBy?: string;
  modifiedAt?: string;
}

export interface SchoolFeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  admNo: string;
  term: string;
  year: number;
  totalTuition: number;
  boardingFee: number;
  activityFee: number;
  totalPayable: number;
  amountPaid: number;
  balance: number;
  payments: {
    id: string;
    receiptNo: string;
    date: string;
    amount: number;
    method: 'Bank Deposit' | 'M-PESA Paybill' | 'Government Bursary';
    reference: string;
  }[];
}

export interface ParentMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'parent' | 'teacher' | 'admin';
  recipientId: string;
  recipientName: string;
  subject: string;
  body: string;
  timestamp: string;
  isRead: boolean;
}

export interface AdmissionApplication {
  id: string;
  applicantName: string;
  kcpeIndex: string;
  marks: number;
  previousSchool: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  applicationDate: string;
  status: 'Pending' | 'Under Review' | 'Accepted' | 'Waitlisted' | 'Rejected';
  decisionNotes?: string;
}

export interface AuditLog {
  id: string;
  action: string;
  performedBy: string;
  timestamp: string;
  details: string;
}
