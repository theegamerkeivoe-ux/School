import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { AnnouncementsBar } from './components/AnnouncementsBar';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { QuickHighlights } from './components/QuickHighlights';
import { AboutSection } from './components/AboutSection';
import { PrincipalMessage } from './components/PrincipalMessage';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { CampusExperience } from './components/CampusExperience';
import { NewsEventsSection } from './components/NewsEventsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { AlumniSection } from './components/AlumniSection';
import { ParentStudentQuickAccess } from './components/ParentStudentQuickAccess';
import { DownloadsSection } from './components/DownloadsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminEditorModal } from './components/AdminEditorModal';

// Portal Components & Data
import { PortalGatewayModal } from './components/portal/PortalGatewayModal';
import { PortalLayout } from './components/portal/PortalLayout';
import { StudentPortal } from './components/portal/StudentPortal';
import { ParentPortal } from './components/portal/ParentPortal';
import { TeacherPortal } from './components/portal/TeacherPortal';
import { AdminPortal } from './components/portal/AdminPortal';

import {
  initialSchoolInfo,
  heroSlides,
  quickHighlights,
  coreValuesList,
  departmentsList,
  facilityItems,
  newsAndEventsList,
  galleryList,
  achievementList,
  downloadsList,
} from './data/schoolData';

import {
  demoUsers,
  initialStudents,
  initialTeachers,
  initialAcademicRecords,
  initialTimetable,
  initialAssignments,
  initialFeeRecords,
  initialMessages,
  initialAdmissions,
  initialAuditLogs,
} from './data/portalMockData';

import { EditableSchoolInfo } from './types';
import { User, UserRole, Student, Teacher, AcademicRecord, Assignment, SchoolFeeRecord, ParentMessage, AdmissionApplication, AuditLog } from './types/portal';
import {
  LayoutDashboard,
  User as UserIcon,
  GraduationCap,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  DollarSign,
  MessageSquare,
  Users,
  Briefcase,
  CheckSquare,
  ShieldCheck,
  Award,
} from 'lucide-react';

export default function App() {
  // Public School Info
  const [schoolInfo, setSchoolInfo] = useState<EditableSchoolInfo>(() => {
    try {
      const saved = localStorage.getItem('mmg_school_info');
      if (saved) return JSON.parse(saved);
    } catch (err) {
      console.error('Error loading school info:', err);
    }
    return initialSchoolInfo;
  });

  // Portal Authentication State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isGatewayOpen, setIsGatewayOpen] = useState(false);
  const [gatewayInitialRole, setGatewayInitialRole] = useState<UserRole>('student');
  const [activePortalTab, setActivePortalTab] = useState('dashboard');
  const [isAdminEditorOpen, setIsAdminEditorOpen] = useState(false);

  // Portal Database States
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [academicRecords, setAcademicRecords] = useState<AcademicRecord[]>(initialAcademicRecords);
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments);
  const [feeRecords, setFeeRecords] = useState<SchoolFeeRecord[]>(initialFeeRecords);
  const [messages, setMessages] = useState<ParentMessage[]>(initialMessages);
  const [admissions, setAdmissions] = useState<AdmissionApplication[]>(initialAdmissions);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(initialAuditLogs);

  // Open Gateway with specific role or generic
  const handleOpenGateway = (role?: UserRole) => {
    if (role) {
      setGatewayInitialRole(role);
    }
    setIsGatewayOpen(true);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setActivePortalTab('dashboard');
    setIsGatewayOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActivePortalTab('dashboard');
  };

  const handleSwitchUser = (newUser: User) => {
    setCurrentUser(newUser);
    setActivePortalTab('dashboard');
  };

  // Administration Operations
  const handleAddStudent = (newStudentData: Partial<Student>) => {
    const created: Student = {
      id: `student-${Date.now()}`,
      admissionNumber: newStudentData.admissionNumber || `MMG-2026-${Math.floor(100 + Math.random() * 900)}`,
      fullName: newStudentData.fullName || 'Student Name',
      dateOfBirth: newStudentData.dateOfBirth || '2010-05-15',
      form: newStudentData.form || 'Form 1',
      stream: newStudentData.stream || 'Green',
      gender: 'Female',
      dormitory: newStudentData.dormitory || 'Suswa House',
      guardianName: newStudentData.guardianName || 'Guardian Name',
      guardianPhone: newStudentData.guardianPhone || '+254 700 000 000',
      guardianEmail: newStudentData.guardianEmail || 'parent@example.com',
      guardianRelationship: newStudentData.guardianRelationship || 'Mother',
      enrollmentDate: newStudentData.enrollmentDate || '2026-01-10',
      status: 'Active',
      attendanceRate: 100,
      feeBalance: 0,
      totalFees: 45000,
    };

    setStudents((prev) => [created, ...prev]);

    // Create Audit Log
    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      action: 'ENROLL_STUDENT',
      performedBy: currentUser?.name || 'Administrator',
      timestamp: new Date().toLocaleString(),
      details: `Enrolled new student ${created.fullName} (${created.admissionNumber}) into ${created.form} ${created.stream}.`,
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  const handleApproveResults = (recordId: string) => {
    setAcademicRecords((prev) =>
      prev.map((r) => (r.id === recordId ? { ...r, status: 'Published' } : r))
    );

    const log: AuditLog = {
      id: `log-${Date.now()}`,
      action: 'APPROVE_RESULTS',
      performedBy: currentUser?.name || 'Chief Principal',
      timestamp: new Date().toLocaleString(),
      details: `Officially authorized and published examination results record #${recordId}.`,
    };
    setAuditLogs((prev) => [log, ...prev]);
  };

  const handleRecordFeePayment = (studentId: string, amount: number, ref: string) => {
    const student = students.find((s) => s.id === studentId);
    setFeeRecords((prev) =>
      prev.map((f) => {
        if (f.studentId === studentId) {
          const newPaid = f.amountPaid + amount;
          const newBalance = Math.max(0, f.totalPayable - newPaid);
          const paymentItem = {
            id: `pay-${Date.now()}`,
            receiptNo: `RCT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
            date: new Date().toISOString().split('T')[0],
            amount,
            method: 'M-PESA Paybill' as const,
            reference: ref,
          };
          return {
            ...f,
            amountPaid: newPaid,
            balance: newBalance,
            payments: [paymentItem, ...f.payments],
          };
        }
        return f;
      })
    );

    const log: AuditLog = {
      id: `log-${Date.now()}`,
      action: 'PAYMENT_RECORDED',
      performedBy: currentUser?.name || 'Bursar Desk',
      timestamp: new Date().toLocaleString(),
      details: `Recorded fee payment of KES ${amount.toLocaleString()} for student ${student?.fullName || studentId} (Ref: ${ref}).`,
    };
    setAuditLogs((prev) => [log, ...prev]);
  };

  const handleUpdateAdmissionStatus = (appId: string, status: AdmissionApplication['status']) => {
    setAdmissions((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status } : a))
    );
  };

  const handleBroadcastAnnouncement = (ann: { title: string; body: string; target: string }) => {
    const log: AuditLog = {
      id: `log-${Date.now()}`,
      action: 'BROADCAST_ANNOUNCEMENT',
      performedBy: currentUser?.name || 'Administrator',
      timestamp: new Date().toLocaleString(),
      details: `Broadcasted announcement "${ann.title}" targeted to: ${ann.target}.`,
    };
    setAuditLogs((prev) => [log, ...prev]);

    // Also update school public announcement if target is All
    if (ann.target === 'All') {
      setSchoolInfo((prev) => ({
        ...prev,
        latestAnnouncement: {
          headline: ann.title,
          body: ann.body,
          date: 'Just Now',
          active: true,
        },
      }));
    }
  };

  // Teacher marks entry
  const handleTeacherSaveMarks = (recordId: string, updatedSubjects: any[], submitForApproval: boolean) => {
    setAcademicRecords((prev) =>
      prev.map((r) =>
        r.id === recordId
          ? {
              ...r,
              status: submitForApproval ? 'Submitted' : 'Draft',
            }
          : r
      )
    );
  };

  // Teacher attendance save
  const handleTeacherSaveAttendance = (classStream: string, date: string, records: Record<string, string>) => {
    const log: AuditLog = {
      id: `log-${Date.now()}`,
      action: 'ATTENDANCE_RECORDED',
      performedBy: currentUser?.name || 'Class Teacher',
      timestamp: new Date().toLocaleString(),
      details: `Attendance roll-call saved for ${classStream} on ${date}.`,
    };
    setAuditLogs((prev) => [log, ...prev]);
  };

  // Teacher create assignment
  const handleTeacherCreateAssignment = (assignmentData: Partial<Assignment>) => {
    const newAssign: Assignment = {
      id: `assign-${Date.now()}`,
      title: assignmentData.title || 'Coursework Assignment',
      subject: assignmentData.subject || 'Mathematics',
      form: assignmentData.form || 'Form 3',
      stream: assignmentData.stream || 'Green',
      teacherName: assignmentData.teacherName || 'Subject Teacher',
      dateAssigned: assignmentData.dateAssigned || new Date().toISOString().split('T')[0],
      dueDate: assignmentData.dueDate || '2026-10-15',
      instructions: assignmentData.instructions || '',
      submissionsCount: 0,
    };
    setAssignments((prev) => [newAssign, ...prev]);
  };

  // Parent send message
  const handleParentSendMessage = (msg: { subject: string; body: string; recipientRole: string }) => {
    const newMsg: ParentMessage = {
      id: `msg-${Date.now()}`,
      senderId: currentUser?.id || 'parent-1',
      senderName: currentUser?.name || 'Mrs. Esther M.',
      senderRole: 'parent',
      recipientId: msg.recipientRole === 'admin' ? 'admin-1' : 'teacher-1',
      recipientName: msg.recipientRole === 'admin' ? 'Administration Office' : 'Class Teacher (Mr. Daniel O.)',
      subject: msg.subject,
      body: msg.body,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isRead: false,
    };
    setMessages((prev) => [newMsg, ...prev]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Build role-specific navigation items
  const getNavItemsForRole = (role: UserRole) => {
    switch (role) {
      case 'student':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
          { id: 'profile', label: 'My Profile', icon: <UserIcon className="w-4 h-4" /> },
          { id: 'academics', label: 'Academic Performance', icon: <GraduationCap className="w-4 h-4" /> },
          { id: 'timetable', label: 'Class Timetable', icon: <Clock className="w-4 h-4" /> },
          { id: 'assignments', label: 'Assignments', icon: <FileText className="w-4 h-4" />, badge: assignments.length },
          { id: 'attendance', label: 'Attendance Record', icon: <CheckSquare className="w-4 h-4" /> },
          { id: 'library', label: 'Digital Library', icon: <BookOpen className="w-4 h-4" /> },
          { id: 'clubs', label: 'Clubs & Activities', icon: <Award className="w-4 h-4" /> },
        ];
      case 'parent':
        return [
          { id: 'dashboard', label: 'Parent Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
          { id: 'academics', label: 'Academic View', icon: <GraduationCap className="w-4 h-4" /> },
          { id: 'attendance', label: 'Attendance Records', icon: <CheckSquare className="w-4 h-4" /> },
          { id: 'communication', label: 'Communication Hub', icon: <MessageSquare className="w-4 h-4" />, badge: messages.length },
          { id: 'fees', label: 'Fees & Payments', icon: <DollarSign className="w-4 h-4" /> },
        ];
      case 'teacher':
        return [
          { id: 'dashboard', label: 'Teacher Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
          { id: 'classes', label: 'My Classes & Students', icon: <Users className="w-4 h-4" /> },
          { id: 'marks', label: 'Marks & Results Entry', icon: <FileText className="w-4 h-4" /> },
          { id: 'attendance', label: 'Daily Roll-Call', icon: <CheckSquare className="w-4 h-4" /> },
          { id: 'assignments', label: 'Coursework Tasks', icon: <Briefcase className="w-4 h-4" /> },
        ];
      case 'admin':
        return [
          { id: 'dashboard', label: 'Executive Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
          { id: 'students', label: 'Student Management', icon: <GraduationCap className="w-4 h-4" />, badge: students.length },
          { id: 'examinations', label: 'Examinations Approval', icon: <FileText className="w-4 h-4" /> },
          { id: 'fees', label: 'Fees & Financial Ledger', icon: <DollarSign className="w-4 h-4" /> },
          { id: 'communication', label: 'Broadcast Communication', icon: <MessageSquare className="w-4 h-4" /> },
        ];
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-emerald-900 selection:text-amber-200">
      {/* ========================================================================= */}
      {/* CONDITIONAL RENDERING: AUTHENTICATED PORTAL WORKSPACE vs PUBLIC WEBSITE  */}
      {/* ========================================================================= */}
      {currentUser ? (
        /* ======================== SECURE PORTAL APPLICATION ======================== */
        <PortalLayout
          currentUser={currentUser}
          onLogout={handleLogout}
          onSwitchUser={handleSwitchUser}
          onReturnToWebsite={() => setCurrentUser(null)}
          activeTab={activePortalTab}
          onTabChange={setActivePortalTab}
          navItems={getNavItemsForRole(currentUser.role)}
        >
          {/* Role 1: Student Portal */}
          {currentUser.role === 'student' && (
            <StudentPortal
              student={students[0]}
              academicRecord={academicRecords[0]}
              assignments={assignments}
              timetable={initialTimetable}
              activeTab={activePortalTab}
            />
          )}

          {/* Role 2: Parent Portal */}
          {currentUser.role === 'parent' && (
            <ParentPortal
              parentName={currentUser.name}
              linkedStudents={[students[0], students[1]]}
              academicRecords={academicRecords}
              feeRecords={feeRecords}
              messages={messages}
              onSendMessage={handleParentSendMessage}
              activeTab={activePortalTab}
            />
          )}

          {/* Role 3: Teacher Portal */}
          {currentUser.role === 'teacher' && (
            <TeacherPortal
              teacher={teachers[0]}
              students={students}
              academicRecords={academicRecords}
              assignments={assignments}
              timetable={initialTimetable}
              onSaveMarks={handleTeacherSaveMarks}
              onSaveAttendance={handleTeacherSaveAttendance}
              onCreateAssignment={handleTeacherCreateAssignment}
              activeTab={activePortalTab}
            />
          )}

          {/* Role 4: Administration Portal */}
          {currentUser.role === 'admin' && (
            <AdminPortal
              students={students}
              teachers={teachers}
              parents={[]}
              academicRecords={academicRecords}
              feeRecords={feeRecords}
              admissions={admissions}
              auditLogs={auditLogs}
              onAddStudent={handleAddStudent}
              onApproveResults={handleApproveResults}
              onRecordFeePayment={handleRecordFeePayment}
              onUpdateAdmissionStatus={handleUpdateAdmissionStatus}
              onBroadcastAnnouncement={handleBroadcastAnnouncement}
              activeTab={activePortalTab}
            />
          )}
        </PortalLayout>
      ) : (
        /* ========================== OFFICIAL PUBLIC WEBSITE ========================== */
        <>
          {/* 1. Top Information Bar */}
          <TopBar
            schoolInfo={schoolInfo}
            onOpenPortal={handleOpenGateway}
            onOpenAdmin={() => setIsAdminEditorOpen(true)}
          />

          {/* 2. Sticky Main Navigation (with prominent PORTAL LOGIN button) */}
          <Navbar
            onOpenPortal={handleOpenGateway}
            onOpenSearch={() => scrollToSection('downloads')}
          />

          {/* 13. Visually distinct school announcement bar */}
          <AnnouncementsBar
            schoolInfo={schoolInfo}
            onOpenNews={() => scrollToSection('news')}
          />

          <main className="flex-1">
            {/* 3. Hero Section (Rock-solid institutional showcase with quick portal links) */}
            <Hero slides={heroSlides} onOpenPortal={handleOpenGateway} />

            {/* 4. Welcome Section */}
            <WelcomeSection schoolInfo={schoolInfo} />

            {/* 5. Quick School Highlights */}
            <QuickHighlights highlights={quickHighlights} />

            {/* 6. About the School */}
            <AboutSection
              schoolInfo={schoolInfo}
              coreValues={coreValuesList}
              onOpenAdmin={() => setIsAdminEditorOpen(true)}
            />

            {/* 7. Principal's Message */}
            <PrincipalMessage
              schoolInfo={schoolInfo}
              onOpenAdmin={() => setIsAdminEditorOpen(true)}
            />

            {/* 8. Academics Section */}
            <AcademicsSection departments={departmentsList} />

            {/* 9. Admissions Section */}
            <AdmissionsSection
              schoolInfo={schoolInfo}
              onOpenDownloads={() => scrollToSection('downloads')}
              onOpenContact={() => scrollToSection('contact')}
            />

            {/* 10. Student Life Section */}
            <StudentLifeSection />

            {/* 11. Campus Experience */}
            <CampusExperience facilities={facilityItems} />

            {/* 12. News & Events */}
            <NewsEventsSection newsList={newsAndEventsList} />

            {/* 14. Achievements */}
            <AchievementsSection achievements={achievementList} />

            {/* 15. Gallery with full-screen lightbox */}
            <GallerySection photos={galleryList} />

            {/* 16. Video Section */}
            <VideoSection />

            {/* 17. Alumni Section */}
            <AlumniSection />

            {/* 18. Parents & Students Quick-Access Section */}
            <ParentStudentQuickAccess
              onOpenPortal={handleOpenGateway}
              onOpenDownloads={() => scrollToSection('downloads')}
              onOpenContact={() => scrollToSection('contact')}
            />

            {/* 19. Document Center & Downloads */}
            <DownloadsSection files={downloadsList} />

            {/* 20. Contact Section */}
            <ContactSection schoolInfo={schoolInfo} />
          </main>

          {/* 21. Footer */}
          <Footer
            schoolInfo={schoolInfo}
            onOpenPortal={handleOpenGateway}
            onOpenDownloads={() => scrollToSection('downloads')}
            onOpenAdmin={() => setIsAdminEditorOpen(true)}
          />
        </>
      )}

      {/* Role-Based Portal Gateway Modal */}
      <PortalGatewayModal
        isOpen={isGatewayOpen}
        onClose={() => setIsGatewayOpen(false)}
        onLogin={handleLogin}
        initialRole={gatewayInitialRole}
      />

      {/* School Administrator Live Content Editor Drawer/Modal */}
      <AdminEditorModal
        isOpen={isAdminEditorOpen}
        onClose={() => setIsAdminEditorOpen(false)}
        schoolInfo={schoolInfo}
        onSave={(newInfo) => {
          setSchoolInfo(newInfo);
          try {
            localStorage.setItem('mmg_school_info', JSON.stringify(newInfo));
          } catch (e) {
            console.error(e);
          }
        }}
        onReset={() => {
          setSchoolInfo(initialSchoolInfo);
          try {
            localStorage.removeItem('mmg_school_info');
          } catch (e) {
            console.error(e);
          }
        }}
      />
    </div>
  );
}
