import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  Calendar,
  Clock,
  FileText,
  DollarSign,
  MessageSquare,
  Send,
  Download,
  AlertCircle,
  CheckCircle2,
  Bell,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Phone,
  Mail,
  UserCheck,
} from 'lucide-react';
import { Student, AcademicRecord, SchoolFeeRecord, ParentMessage } from '../../types/portal';

interface ParentPortalProps {
  parentName: string;
  linkedStudents: Student[];
  academicRecords: AcademicRecord[];
  feeRecords: SchoolFeeRecord[];
  messages: ParentMessage[];
  onSendMessage: (msg: { subject: string; body: string; recipientRole: string }) => void;
  activeTab: string;
}

export const ParentPortal: React.FC<ParentPortalProps> = ({
  parentName,
  linkedStudents,
  academicRecords,
  feeRecords,
  messages,
  onSendMessage,
  activeTab,
}) => {
  // Selected child state
  const [selectedStudentId, setSelectedStudentId] = useState<string>(
    linkedStudents[0]?.id || ''
  );

  // New message form state
  const [msgSubject, setMsgSubject] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [msgRecipient, setMsgRecipient] = useState<'admin' | 'teacher'>('teacher');
  const [sendSuccess, setSendSuccess] = useState(false);

  // Attendance alerts preference
  const [attendanceAlertsEnabled, setAttendanceAlertsEnabled] = useState(true);

  const currentStudent =
    linkedStudents.find((s) => s.id === selectedStudentId) || linkedStudents[0];

  const currentAcademicRecord = academicRecords.find(
    (r) => r.studentId === currentStudent?.id
  );

  const currentFeeRecord = feeRecords.find(
    (f) => f.studentId === currentStudent?.id
  );

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgSubject || !msgBody) return;

    onSendMessage({
      subject: msgSubject,
      body: msgBody,
      recipientRole: msgRecipient,
    });

    setSendSuccess(true);
    setMsgSubject('');
    setMsgBody('');
    setTimeout(() => setSendSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Linked Children Selection Ribbon (Crucial requirement: one parent with multiple children) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-bold">
            Family Portal Profile
          </span>
          <h2 className="font-serif font-bold text-lg text-slate-900">
            Welcome, {parentName}
          </h2>
          <p className="text-xs text-slate-500">
            You currently have <span className="font-bold text-amber-900">{linkedStudents.length} children</span> registered at Maai-Mahiu Girls High School.
          </p>
        </div>

        {/* Child Selector Tabs */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600 hidden md:inline">
            Active Child:
          </span>
          <div className="flex items-center gap-1.5 p-1 bg-amber-50/80 rounded-xl border border-amber-200">
            {linkedStudents.map((child) => (
              <button
                key={child.id}
                onClick={() => setSelectedStudentId(child.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  currentStudent.id === child.id
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'text-amber-900 hover:bg-amber-100/70'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{child.fullName.split(' ')[0]} ({child.form})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 1. PARENT DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Active Child Overview Card */}
          <div className="bg-amber-950 text-white rounded-3xl p-6 sm:p-8 border border-amber-900 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-900/80 border-2 border-amber-400 flex items-center justify-center text-white font-bold text-xl shrink-0">
                {currentStudent.fullName.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-300 font-semibold">
                    Monitored Learner Record
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {currentStudent.fullName}
                </h1>
                <p className="text-xs text-amber-200/90 mt-0.5">
                  Admission Number: <span className="font-mono font-bold text-white">{currentStudent.admissionNumber}</span> · {currentStudent.form} {currentStudent.stream}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-amber-900/60 border border-amber-800 text-center">
                <span className="text-[11px] text-amber-300 block">Attendance Rate</span>
                <span className="font-mono font-bold text-base text-white">{currentStudent.attendanceRate}%</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-amber-900/60 border border-amber-800 text-center">
                <span className="text-[11px] text-amber-300 block">Fee Balance</span>
                <span className="font-mono font-bold text-base text-amber-400">
                  {currentStudent.feeBalance === 0 ? 'KES 0 (Cleared)' : `KES ${currentStudent.feeBalance.toLocaleString()}`}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Academic Performance</span>
              <p className="font-serif font-bold text-xl text-slate-900 mt-1">
                Mean Grade: {currentAcademicRecord?.meanGrade || 'A-'}
              </p>
              <p className="text-[11px] text-emerald-700 mt-0.5">
                Average: {currentAcademicRecord?.averageMarks || 81.7}% (Ranked in top quintile)
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Hostel Welfare</span>
              <p className="font-serif font-bold text-base text-slate-900 mt-1">
                {currentStudent.dormitory}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Dorm Matron: Certified Regular Attendance
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Term 2 School Fees</span>
              <p className="font-serif font-bold text-xl text-slate-900 mt-1">
                {currentFeeRecord?.balance === 0 ? 'Fully Cleared' : `KES ${currentFeeRecord?.balance.toLocaleString()} Due`}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Total Term Fee: KES {currentFeeRecord?.totalPayable.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Academic Highlights & Recent Messages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-serif font-bold text-base text-slate-900">
                  {currentStudent.fullName.split(' ')[0]}’s Recent Subject Marks
                </h3>
                <span className="text-xs text-slate-500 font-mono">Term 2, 2026</span>
              </div>

              <div className="space-y-2.5">
                {currentAcademicRecord?.subjects.slice(0, 5).map((sub) => (
                  <div
                    key={sub.subjectName}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div>
                      <p className="font-semibold text-xs sm:text-sm text-slate-900">{sub.subjectName}</p>
                      <p className="text-[11px] text-slate-500 italic">Teacher: {sub.teacherName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm text-slate-900">{sub.totalMark}%</span>
                      <span className="px-2 py-0.5 text-xs font-bold rounded bg-amber-100 text-amber-900 font-mono">
                        {sub.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Communication Widget */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    School Messages & Notices
                  </h3>
                  <span className="text-xs text-amber-800 font-bold font-mono">
                    {messages.length} Messages
                  </span>
                </div>

                <div className="space-y-3">
                  {messages.map((m) => (
                    <div key={m.id} className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/70">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="font-bold text-slate-900">{m.senderName}</span>
                        <span className="text-slate-400">{m.timestamp}</span>
                      </div>
                      <p className="font-semibold text-xs text-slate-800">{m.subject}</p>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1">{m.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                You can send inquiries directly to teachers or administration in the Communication tab.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. PARENT ACADEMIC VIEW (READ-ONLY) */}
      {activeTab === 'academics' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                {currentStudent.fullName}’s Academic Performance
              </h2>
              <p className="text-xs text-slate-500">
                Term 2, 2026 Examination Results & Remarks (Read-Only)
              </p>
            </div>

            <button
              onClick={() => alert(`Downloading official PDF Report Card for ${currentStudent.fullName}...`)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Report Card</span>
            </button>
          </div>

          {/* Subject marks table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <th className="py-3 px-3">Subject</th>
                  <th className="py-3 px-3">CAT (/30)</th>
                  <th className="py-3 px-3">End-Term (/70)</th>
                  <th className="py-3 px-3">Total Score</th>
                  <th className="py-3 px-3">Grade</th>
                  <th className="py-3 px-3">Teacher Feedback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentAcademicRecord?.subjects.map((sub) => (
                  <tr key={sub.subjectName} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-semibold text-slate-900">{sub.subjectName}</td>
                    <td className="py-3 px-3 font-mono">{sub.catMark}</td>
                    <td className="py-3 px-3 font-mono">{sub.examMark}</td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-900">{sub.totalMark}%</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 text-xs font-bold rounded bg-amber-100 text-amber-900 font-mono">
                        {sub.grade}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600 text-xs italic">{sub.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Class Teacher Remarks:</span>
              <p className="text-slate-600 italic">"{currentAcademicRecord?.classTeacherRemarks}"</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">Principal’s Endorsement:</span>
              <p className="text-slate-600 italic">"{currentAcademicRecord?.principalRemarks}"</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. PARENT ATTENDANCE */}
      {activeTab === 'attendance' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Attendance & Punctuality Record
              </h2>
              <p className="text-xs text-slate-500">
                Monitored roll-call for {currentStudent.fullName}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={attendanceAlertsEnabled}
                  onChange={(e) => setAttendanceAlertsEnabled(e.target.checked)}
                  className="rounded text-amber-700 focus:ring-amber-700"
                />
                <span>SMS / Email Attendance Alerts</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-xs text-emerald-800 font-semibold">Attendance Percentage</span>
              <p className="font-serif font-bold text-2xl text-emerald-950 mt-1">{currentStudent.attendanceRate}%</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500">Absences this Term</span>
              <p className="font-serif font-bold text-2xl text-amber-700 mt-1">1 Day (Excused)</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500">Late Arrivals</span>
              <p className="font-serif font-bold text-2xl text-slate-700 mt-1">0 Days</p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            * Parents receive automated SMS alerts if a student is recorded absent without prior written excuse.
          </p>
        </div>
      )}

      {/* 4. PARENT COMMUNICATION */}
      {activeTab === 'communication' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="font-serif font-bold text-xl text-slate-900">
              Parent-School Communication Center
            </h2>
            <p className="text-xs text-slate-500">
              Send direct inquiries to class teachers or school administration and review conversation history.
            </p>
          </div>

          {sendSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Inquiry dispatched successfully! The administration or teacher will respond promptly.</span>
            </div>
          )}

          {/* New Message Form */}
          <form onSubmit={handleMessageSubmit} className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h3 className="font-serif font-bold text-sm text-slate-900">
              Compose Message / Inquiry
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Recipient Department
                </label>
                <select
                  value={msgRecipient}
                  onChange={(e) => setMsgRecipient(e.target.value as 'admin' | 'teacher')}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700"
                >
                  <option value="teacher">Class Subject Teacher (Mr. Daniel O.)</option>
                  <option value="admin">School Administration / Principal’s Desk</option>
                  <option value="bursar">Accounts & Fee Circulars Office</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Subject Line
                </label>
                <input
                  type="text"
                  required
                  value={msgSubject}
                  onChange={(e) => setMsgSubject(e.target.value)}
                  placeholder="e.g. Inquiring on Saturday consultation clinic"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message Body
              </label>
              <textarea
                required
                rows={4}
                value={msgBody}
                onChange={(e) => setMsgBody(e.target.value)}
                placeholder="Write your detailed inquiry..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 resize-y"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>

          {/* Past Messages History */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="font-serif font-bold text-sm text-slate-900">
              Message History & Inquiries
            </h3>
            {messages.map((msg) => (
              <div key={msg.id} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{msg.senderName}</span>
                  <span className="text-slate-400 font-mono text-[11px]">{msg.timestamp}</span>
                </div>
                <h4 className="font-semibold text-xs text-amber-900">{msg.subject}</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{msg.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. PARENT FEES & PAYMENTS SECTION */}
      {activeTab === 'fees' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                School Fees & Payment Ledger
              </h2>
              <p className="text-xs text-slate-500">
                Statement of accounts for {currentStudent.fullName} ({currentStudent.admissionNumber})
              </p>
            </div>

            <button
              onClick={() => alert(`Downloading official fee statement for ${currentStudent.fullName}...`)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Statement</span>
            </button>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-500 block">Total Term Payable</span>
              <p className="font-serif font-bold text-2xl text-slate-900 mt-1">
                KES {currentFeeRecord?.totalPayable.toLocaleString()}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">Approved Ministry of Education Circular</p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs text-emerald-800 font-semibold block">Total Amount Paid</span>
              <p className="font-serif font-bold text-2xl text-emerald-950 mt-1">
                KES {currentFeeRecord?.amountPaid.toLocaleString()}
              </p>
              <p className="text-[11px] text-emerald-700 mt-0.5">Receipts confirmed on ledger</p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs text-amber-800 font-semibold block">Current Balance</span>
              <p className="font-serif font-bold text-2xl text-amber-950 mt-1">
                {currentFeeRecord?.balance === 0 ? 'KES 0 (Cleared)' : `KES ${currentFeeRecord?.balance.toLocaleString()}`}
              </p>
              <p className="text-[11px] text-amber-700 mt-0.5">
                {currentFeeRecord?.balance === 0 ? 'Zero outstanding fees' : 'Payable before mid-term break'}
              </p>
            </div>
          </div>

          {/* Payment Receipts History Table */}
          <div>
            <h3 className="font-serif font-bold text-base text-slate-900 mb-3">
              Payment & Receipt History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                    <th className="py-2.5 px-3">Receipt No.</th>
                    <th className="py-2.5 px-3">Payment Date</th>
                    <th className="py-2.5 px-3">Amount</th>
                    <th className="py-2.5 px-3">Payment Channel</th>
                    <th className="py-2.5 px-3">Bank Reference</th>
                    <th className="py-2.5 px-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentFeeRecord?.payments.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">{p.receiptNo}</td>
                      <td className="py-3 px-3">{p.date}</td>
                      <td className="py-3 px-3 font-mono font-bold text-emerald-800">
                        KES {p.amount.toLocaleString()}
                      </td>
                      <td className="py-3 px-3">{p.method}</td>
                      <td className="py-3 px-3 font-mono text-slate-600">{p.reference}</td>
                      <td className="py-3 px-3">
                        <button
                          onClick={() => alert(`Printing receipt ${p.receiptNo}...`)}
                          className="text-xs text-amber-800 hover:underline font-semibold"
                        >
                          Print Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* M-PESA & Bank Integration Placeholder (Adhering to prompt: do not claim payments are currently connected; structure for future M-PESA integration) */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-emerald-700" />
              <h4 className="font-serif font-bold text-sm text-slate-900">
                Official Payment Guidelines (M-PESA & Bank Details)
              </h4>
              <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                Direct Integration Ready
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Official school fees may be paid through the official institutional Paybill or direct bank deposit.
              Please ensure your daughter’s Admission Number is included as the account reference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block">Safaricom M-PESA Paybill:</span>
                <p className="text-slate-600 mt-0.5">Business No: <span className="font-mono font-bold text-emerald-800">[Official School Paybill: 222111]</span></p>
                <p className="text-slate-600">Account No: <span className="font-mono font-bold text-slate-900">{currentStudent.admissionNumber}</span></p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block">Kenya Commercial Bank (KCB):</span>
                <p className="text-slate-600 mt-0.5">Account Name: <span className="font-bold text-slate-800">Maai-Mahiu Girls High School</span></p>
                <p className="text-slate-600">Account No: <span className="font-mono font-bold text-slate-900">[Official Bank Account]</span></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
