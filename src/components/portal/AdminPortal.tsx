import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  DollarSign,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Download,
  Send,
  FileCheck,
  CheckSquare,
  Lock,
  Globe,
  Bell,
  Archive,
  RefreshCw,
  FileText,
} from 'lucide-react';
import {
  Student,
  Teacher,
  Parent,
  AcademicRecord,
  SchoolFeeRecord,
  AdmissionApplication,
  AuditLog,
} from '../../types/portal';

interface AdminPortalProps {
  students: Student[];
  teachers: Teacher[];
  parents: Parent[];
  academicRecords: AcademicRecord[];
  feeRecords: SchoolFeeRecord[];
  admissions: AdmissionApplication[];
  auditLogs: AuditLog[];
  onAddStudent: (newStudent: Partial<Student>) => void;
  onApproveResults: (recordId: string) => void;
  onRecordFeePayment: (studentId: string, amount: number, ref: string) => void;
  onUpdateAdmissionStatus: (appId: string, status: AdmissionApplication['status']) => void;
  onBroadcastAnnouncement: (announcement: { title: string; body: string; target: string }) => void;
  activeTab: string;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  students,
  teachers,
  parents,
  academicRecords,
  feeRecords,
  admissions,
  auditLogs,
  onAddStudent,
  onApproveResults,
  onRecordFeePayment,
  onUpdateAdmissionStatus,
  onBroadcastAnnouncement,
  activeTab,
}) => {
  // Search & Filter
  const [studentSearch, setStudentSearch] = useState('');
  const [formFilter, setFormFilter] = useState('All');

  // Add Student Modal State
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentAdm, setNewStudentAdm] = useState('');
  const [newStudentForm, setNewStudentForm] = useState<'Form 1' | 'Form 2' | 'Form 3' | 'Form 4'>('Form 1');
  const [newStudentStream, setNewStudentStream] = useState<'Green' | 'Gold' | 'White'>('Green');
  const [newStudentGuardian, setNewStudentGuardian] = useState('');
  const [newStudentPhone, setNewStudentPhone] = useState('');

  // Fee payment state
  const [payStudentId, setPayStudentId] = useState(students[0]?.id || '');
  const [payAmount, setPayAmount] = useState(5000);
  const [payRef, setPayRef] = useState('');
  const [paySuccess, setPaySuccess] = useState(false);

  // Broadcast announcement state
  const [annTitle, setAnnTitle] = useState('');
  const [annBody, setAnnBody] = useState('');
  const [annTarget, setAnnTarget] = useState('All');
  const [annSuccess, setAnnSuccess] = useState(false);

  // Report card preview state
  const [previewStudentId, setPreviewStudentId] = useState<string | null>(null);

  // Filtered Students
  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.fullName.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.admissionNumber.toLowerCase().includes(studentSearch.toLowerCase());
    const matchesForm = formFilter === 'All' || s.form === formFilter;
    return matchesSearch && matchesForm;
  });

  const totalOutstandingFees = feeRecords.reduce((acc, f) => acc + f.balance, 0);

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName || !newStudentAdm) return;

    onAddStudent({
      fullName: newStudentName,
      admissionNumber: newStudentAdm.toUpperCase(),
      form: newStudentForm,
      stream: newStudentStream,
      guardianName: newStudentGuardian || 'Guardian on Record',
      guardianPhone: newStudentPhone || '+254 7XX XXX XXX',
      dateOfBirth: '2010-01-01',
      gender: 'Female',
      dormitory: 'Suswa House',
      guardianEmail: 'parent@example.com',
      guardianRelationship: 'Mother',
      enrollmentDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      attendanceRate: 100,
      feeBalance: 0,
      totalFees: 45000,
    });

    setShowAddStudent(false);
    setNewStudentName('');
    setNewStudentAdm('');
    setNewStudentGuardian('');
    setNewStudentPhone('');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!payRef) return;
    onRecordFeePayment(payStudentId, payAmount, payRef);
    setPaySuccess(true);
    setPayRef('');
    setTimeout(() => setPaySuccess(false), 3000);
  };

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle || !annBody) return;
    onBroadcastAnnouncement({ title: annTitle, body: annBody, target: annTarget });
    setAnnSuccess(true);
    setAnnTitle('');
    setAnnBody('');
    setTimeout(() => setAnnSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* 1. ADMIN DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Executive Header */}
          <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-900 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-rose-400 font-semibold">
                  School Administration Master Console
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Office of the Chief Principal
              </h1>
              <p className="text-xs text-slate-300 mt-1">
                Maai-Mahiu Girls High School · Institutional Operational Authority
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-emerald-300">
                System Status: Operational
              </span>
            </div>
          </div>

          {/* Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">Total Registered Students</span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
              <p className="font-serif font-bold text-2xl text-slate-900">{students.length} Learners</p>
              <p className="text-[11px] text-emerald-700 mt-0.5">Active across Form 1–4</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">Teaching Faculty</span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
              </div>
              <p className="font-serif font-bold text-2xl text-slate-900">{teachers.length} Instructors</p>
              <p className="text-[11px] text-blue-700 mt-0.5">TSC Registered Staff</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">Daily School Attendance</span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <CheckSquare className="w-4 h-4" />
                </div>
              </div>
              <p className="font-serif font-bold text-2xl text-emerald-800">98.2%</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Morning Roll-Call Recorded</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 font-medium">Pending Admissions</span>
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                  <FileCheck className="w-4 h-4" />
                </div>
              </div>
              <p className="font-serif font-bold text-2xl text-amber-700">
                {admissions.filter((a) => a.status === 'Pending').length} Applications
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">Awaiting NEMIS verification</p>
            </div>
          </div>

          {/* Quick Actions & Recent Audit Log */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Admissions & Pending Approvals */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-serif font-bold text-base text-slate-900">
                  Pending Intake Applications
                </h3>
                <span className="text-xs font-mono font-bold text-amber-800">
                  {admissions.length} Registered
                </span>
              </div>

              <div className="space-y-3">
                {admissions.map((app) => (
                  <div key={app.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">{app.applicantName}</p>
                      <p className="text-xs text-slate-500">
                        Index: {app.kcpeIndex} · Primary Marks: <span className="font-bold text-emerald-800">{app.marks}/500</span> · {app.previousSchool}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={app.status}
                        onChange={(e) => onUpdateAdmissionStatus(app.id, e.target.value as any)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                          app.status === 'Accepted'
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                            : app.status === 'Under Review'
                            ? 'bg-blue-50 text-blue-900 border-blue-300'
                            : 'bg-amber-50 text-amber-900 border-amber-300'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Waitlisted">Waitlisted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Logs */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-serif font-bold text-base text-slate-900">
                  Institutional Audit Trail
                </h3>
                <span className="text-xs font-mono text-slate-400">Security Log</span>
              </div>

              <div className="space-y-3">
                {auditLogs.map((log) => (
                  <div key={log.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-0.5">
                      <span className="font-bold text-slate-700">{log.action}</span>
                      <span>{log.timestamp}</span>
                    </div>
                    <p className="text-slate-700 font-medium">{log.details}</p>
                    <span className="text-[10px] text-slate-400 block mt-1">By: {log.performedBy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. STUDENT MANAGEMENT */}
      {activeTab === 'students' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Student Enrollment & Roster Management
              </h2>
              <p className="text-xs text-slate-500">
                Register new students, update stream allocations, and archive records.
              </p>
            </div>

            <button
              onClick={() => setShowAddStudent(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Enroll New Student</span>
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Search by student name or admission number..."
                className="w-full pl-10 pr-3 py-2 text-xs rounded-xl border border-slate-300"
              />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <span className="text-xs text-slate-500">Form:</span>
              <select
                value={formFilter}
                onChange={(e) => setFormFilter(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white"
              >
                <option value="All">All Forms</option>
                <option value="Form 1">Form 1</option>
                <option value="Form 2">Form 2</option>
                <option value="Form 3">Form 3</option>
                <option value="Form 4">Form 4</option>
              </select>
            </div>
          </div>

          {/* Students Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <th className="py-2.5 px-3">Adm No.</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Form & Stream</th>
                  <th className="py-2.5 px-3">Guardian</th>
                  <th className="py-2.5 px-3">Guardian Contact</th>
                  <th className="py-2.5 px-3">Attendance</th>
                  <th className="py-2.5 px-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-mono font-bold text-emerald-800">{s.admissionNumber}</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">{s.fullName}</td>
                    <td className="py-3 px-3">{s.form} {s.stream}</td>
                    <td className="py-3 px-3">{s.guardianName}</td>
                    <td className="py-3 px-3 font-mono text-slate-600">{s.guardianPhone}</td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-800">{s.attendanceRate}%</td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => alert(`Viewing full record for ${s.fullName}`)}
                        className="p-1 text-slate-400 hover:text-emerald-800"
                        title="View Record"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Student Modal */}
          {showAddStudent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-1">
                  Enroll New Student
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Add student details to the central institutional registry.
                </p>

                <form onSubmit={handleCreateStudent} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      value={newStudentName}
                      onChange={(e) => setNewStudentName(e.target.value)}
                      placeholder="e.g. Christine A. [Student Demo]"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Admission Number *</label>
                      <input
                        type="text"
                        required
                        value={newStudentAdm}
                        onChange={(e) => setNewStudentAdm(e.target.value)}
                        placeholder="e.g. MMG-2026-112"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono uppercase"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Form Class *</label>
                      <select
                        value={newStudentForm}
                        onChange={(e) => setNewStudentForm(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="Form 1">Form 1</option>
                        <option value="Form 2">Form 2</option>
                        <option value="Form 3">Form 3</option>
                        <option value="Form 4">Form 4</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Stream Allocation *</label>
                      <select
                        value={newStudentStream}
                        onChange={(e) => setNewStudentStream(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="Green">Green</option>
                        <option value="Gold">Gold</option>
                        <option value="White">White</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Guardian Phone *</label>
                      <input
                        type="tel"
                        required
                        value={newStudentPhone}
                        onChange={(e) => setNewStudentPhone(e.target.value)}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      value={newStudentGuardian}
                      onChange={(e) => setNewStudentGuardian(e.target.value)}
                      placeholder="e.g. Mrs. Mary K."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300"
                    />
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAddStudent(false)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl"
                    >
                      Save & Enroll
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. EXAMINATION & RESULTS APPROVAL */}
      {activeTab === 'examinations' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="font-serif font-bold text-xl text-slate-900">
              Examination Evaluation & Results Publication
            </h2>
            <p className="text-xs text-slate-500">
              Authorize submitted marks from departmental teachers before releasing to Student & Parent portals.
            </p>
          </div>

          <div className="space-y-4">
            {academicRecords.map((rec) => (
              <div key={rec.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{rec.studentName}</span>
                      <span className="font-mono text-xs font-bold text-emerald-800">({rec.admissionNumber})</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {rec.form} · {rec.term}, {rec.year} · Mean Score: <span className="font-bold text-slate-800">{rec.averageMarks}% ({rec.meanGrade})</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${
                      rec.status === 'Published'
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : 'bg-amber-100 text-amber-900 border-amber-300'
                    }`}>
                      Status: {rec.status}
                    </span>

                    {rec.status !== 'Published' && (
                      <button
                        onClick={() => onApproveResults(rec.id)}
                        className="px-4 py-1.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow transition-colors"
                      >
                        Authorize & Publish
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                  <span className="text-slate-600">8 Subjects Recorded · Science & Humanities Checked</span>
                  <button
                    onClick={() => alert(`Reviewing breakdown for ${rec.studentName}`)}
                    className="text-emerald-800 font-semibold hover:underline"
                  >
                    View Subject Breakdown
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. FEES & FINANCIAL MANAGEMENT */}
      {activeTab === 'fees' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="font-serif font-bold text-xl text-slate-900">
              Institutional Fees Structure & Ledger
            </h2>
            <p className="text-xs text-slate-500">
              Manage termly fees, record bank / M-PESA deposits, and issue official receipts.
            </p>
          </div>

          {paySuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Payment recorded on student ledger and official receipt generated!</span>
            </div>
          )}

          {/* Record Payment Form */}
          <form onSubmit={handlePaymentSubmit} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-serif font-bold text-sm text-slate-900">
              Record New Fee Payment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Select Student</label>
                <select
                  value={payStudentId}
                  onChange={(e) => setPayStudentId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                >
                  {students.map((s) => (
                    <option key={s.id} value={s.id}>{s.fullName} ({s.admissionNumber})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Amount (KES)</label>
                <input
                  type="number"
                  required
                  value={payAmount}
                  onChange={(e) => setPayAmount(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">M-PESA / Bank Ref</label>
                <input
                  type="text"
                  required
                  value={payRef}
                  onChange={(e) => setPayRef(e.target.value)}
                  placeholder="e.g. QHL892MNP"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-mono uppercase"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Post Payment to Ledger</span>
              </button>
            </div>
          </form>

          {/* Student Balances Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <th className="py-2.5 px-3">Adm No.</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Total Payable</th>
                  <th className="py-2.5 px-3">Paid to Date</th>
                  <th className="py-2.5 px-3">Outstanding Balance</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feeRecords.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-mono font-bold text-slate-900">{f.admNo}</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">{f.studentName}</td>
                    <td className="py-3 px-3 font-mono">KES {f.totalPayable.toLocaleString()}</td>
                    <td className="py-3 px-3 font-mono text-emerald-800 font-bold">KES {f.amountPaid.toLocaleString()}</td>
                    <td className="py-3 px-3 font-mono font-bold text-amber-900">
                      {f.balance === 0 ? 'KES 0' : `KES ${f.balance.toLocaleString()}`}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 text-xs font-bold rounded ${
                        f.balance === 0 ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {f.balance === 0 ? 'Cleared' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. BROADCAST COMMUNICATION */}
      {activeTab === 'communication' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="font-serif font-bold text-xl text-slate-900">
              Centralized Institutional Broadcast System
            </h2>
            <p className="text-xs text-slate-500">
              Transmit official announcements to School Website, Parent Portal, Student Portal, or Faculty.
            </p>
          </div>

          {annSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Announcement broadcast successfully to all targeted recipient dashboards!</span>
            </div>
          )}

          <form onSubmit={handleBroadcastSubmit} className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Announcement Headline</label>
                <input
                  type="text"
                  required
                  value={annTitle}
                  onChange={(e) => setAnnTitle(e.target.value)}
                  placeholder="e.g. End of Term Closing Dates & Academic Clinic"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Target Audience</label>
                <select
                  value={annTarget}
                  onChange={(e) => setAnnTarget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
                >
                  <option value="All">All School Portals & Website</option>
                  <option value="Parents">Parents Only</option>
                  <option value="Students">Students Only</option>
                  <option value="Teachers">Teaching Faculty Only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Message Content</label>
              <textarea
                rows={4}
                required
                value={annBody}
                onChange={(e) => setAnnBody(e.target.value)}
                placeholder="Enter complete notice details..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white resize-y"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Broadcast Announcement</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
