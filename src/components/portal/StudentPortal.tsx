import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  Clock,
  BookOpen,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Download,
  DollarSign,
  User,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { Student, AcademicRecord, Assignment, TimetableSlot } from '../../types/portal';

interface StudentPortalProps {
  student: Student;
  academicRecord?: AcademicRecord;
  assignments: Assignment[];
  timetable: TimetableSlot[];
  activeTab: string;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({
  student,
  academicRecord,
  assignments,
  timetable,
  activeTab,
}) => {
  const [selectedDay, setSelectedDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'>('Monday');
  const [submittedAssignments, setSubmittedAssignments] = useState<Record<string, string>>({
    'assign-1': 'Faith_W_Math_Assignment_Quadratic.pdf',
    'assign-2': 'Faith_W_Physics_Lab_Report.pdf',
  });
  const [uploadToast, setUploadToast] = useState<string | null>(null);

  const handleUploadAssignment = (assignmentId: string) => {
    const filename = `${student.fullName.split(' ')[0]}_Submission_${Date.now()}.pdf`;
    setSubmittedAssignments((prev) => ({ ...prev, [assignmentId]: filename }));
    setUploadToast(`Assignment uploaded successfully: ${filename}`);
    setTimeout(() => setUploadToast(null), 3000);
  };

  const daySchedule = timetable.filter((slot) => slot.day === selectedDay);

  return (
    <div className="space-y-6">
      {/* 1. DASHBOARD VIEW */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Welcome Header Hero Banner */}
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-900 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-800">
                <img
                  src={student.photoUrl || '/src/assets/images/hero_academic_learning_1790533246980.jpg'}
                  alt={student.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
                    Term 2, 2026 Academic Session
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Welcome, {student.fullName}
                </h1>
                <p className="text-xs sm:text-sm text-emerald-200/90 mt-0.5">
                  Admission No: <span className="font-mono font-bold text-white">{student.admissionNumber}</span> · {student.form} {student.stream}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-emerald-900/60 border border-emerald-800 text-center">
                <span className="text-[11px] text-emerald-300 block">Attendance</span>
                <span className="font-mono font-bold text-base text-amber-300">{student.attendanceRate}%</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-emerald-900/60 border border-emerald-800 text-center">
                <span className="text-[11px] text-emerald-300 block">Mean Grade</span>
                <span className="font-mono font-bold text-base text-white">{academicRecord?.meanGrade || 'A-'}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium">Class / Stream</span>
                <p className="font-serif font-bold text-lg text-slate-900 mt-0.5">
                  {student.form} {student.stream}
                </p>
                <span className="text-[11px] text-emerald-700">Suswa / Longonot Block</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium">Pending Tasks</span>
                <p className="font-serif font-bold text-lg text-slate-900 mt-0.5">
                  {assignments.length - Object.keys(submittedAssignments).length} Due
                </p>
                <span className="text-[11px] text-amber-700">Due within 5 days</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium">Boarding Hostel</span>
                <p className="font-serif font-bold text-base text-slate-900 mt-0.5 truncate max-w-[150px]">
                  {student.dormitory}
                </p>
                <span className="text-[11px] text-slate-400">Cubicle 4</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium">Fee Clearance</span>
                <p className="font-serif font-bold text-lg text-emerald-800 mt-0.5">
                  Cleared
                </p>
                <span className="text-[11px] text-slate-400">Compliant with MoE</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Academic Overview & Assignments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Recent Academic Standings */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    Latest Subject Evaluations
                  </h3>
                  <p className="text-xs text-slate-500">Term 2 Examination Marks</p>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Mean: {academicRecord?.averageMarks || 81.7}%
                </span>
              </div>

              <div className="space-y-3">
                {academicRecord?.subjects.slice(0, 5).map((sub) => (
                  <div
                    key={sub.subjectName}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div>
                      <p className="font-semibold text-xs sm:text-sm text-slate-900">
                        {sub.subjectName}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        CAT: {sub.catMark}/30 · Exam: {sub.examMark}/70
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-sm text-slate-900 mr-2">
                        {sub.totalMark}%
                      </span>
                      <span className="px-2 py-0.5 text-xs font-bold rounded bg-emerald-100 text-emerald-900">
                        {sub.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Assignments */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <h3 className="font-serif font-bold text-base text-slate-900">
                    Coursework & Tasks
                  </h3>
                  <span className="text-xs text-amber-700 font-semibold font-mono">
                    Active Tasks
                  </span>
                </div>

                <div className="space-y-3">
                  {assignments.map((task) => {
                    const isSubmitted = !!submittedAssignments[task.id];
                    return (
                      <div
                        key={task.id}
                        className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">
                              {task.subject}
                            </span>
                            <h4 className="font-semibold text-xs text-slate-900 leading-snug">
                              {task.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1">
                              Due: {task.dueDate} · {task.teacherName}
                            </p>
                          </div>
                          {isSubmitted ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Submitted</span>
                            </span>
                          ) : (
                            <button
                              onClick={() => handleUploadAssignment(task.id)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors"
                            >
                              <Upload className="w-3 h-3" />
                              <span>Submit</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                All assignments are monitored by class subject teachers.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. MY PROFILE VIEW (LOCKED / READ-ONLY AS SPECIFIED) */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Official Student Profile & Bio-Data
              </h2>
              <p className="text-xs text-slate-500">
                Verified records registered under the National Education Management Information System (NEMIS).
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Sensitive Records Locked (Read-Only)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Full Registered Name</span>
              <p className="font-serif font-bold text-base text-slate-900 mt-1">{student.fullName}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Admission Number</span>
              <p className="font-mono font-bold text-base text-emerald-800 mt-1">{student.admissionNumber}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Date of Birth</span>
              <p className="font-medium text-slate-900 mt-1">{student.dateOfBirth}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Form & Stream</span>
              <p className="font-semibold text-slate-900 mt-1">{student.form} {student.stream}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Gender</span>
              <p className="font-semibold text-slate-900 mt-1">{student.gender}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Dormitory Allocation</span>
              <p className="font-semibold text-slate-900 mt-1">{student.dormitory}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Primary Guardian / Parent</span>
              <p className="font-semibold text-slate-900 mt-1">{student.guardianName} ({student.guardianRelationship})</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Guardian Emergency Phone</span>
              <p className="font-mono text-slate-900 mt-1">{student.guardianPhone}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-400 block text-xs">Guardian Email</span>
              <p className="font-mono text-slate-900 mt-1">{student.guardianEmail}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              Students cannot edit official demographic or contact information. If any details are incorrect, please have your parent or guardian submit a correction request to the School Administration Office.
            </p>
          </div>
        </div>
      )}

      {/* 3. ACADEMIC PERFORMANCE & PROGRESS CHARTS */}
      {activeTab === 'academics' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-900">
                  Academic Progress & Report Card
                </h2>
                <p className="text-xs text-slate-500">
                  Term 2, 2026 Official End-of-Term Assessment Results
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Generating official PDF report card for ${student.fullName}...`)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Report Card PDF</span>
                </button>
              </div>
            </div>

            {/* Visual SVG Progress Chart Over Time (Term 1, Term 2, Projected) */}
            <div className="py-6 border-b border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                  Continuous Score Trajectory
                </span>
                <span className="text-xs text-emerald-800 font-bold">
                  +3.2% Improvement this term
                </span>
              </div>

              {/* Clean SVG Trend Visualization */}
              <div className="h-44 w-full bg-slate-50 rounded-xl p-4 border border-slate-200 relative flex flex-col justify-end">
                <div className="flex items-end justify-around h-32 pt-4">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono font-bold text-slate-700">78.5%</span>
                    <div className="w-12 bg-emerald-700 rounded-t-lg transition-all" style={{ height: '78%' }}></div>
                    <span className="text-[11px] font-medium text-slate-500 mt-1">Term 1 (2026)</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono font-bold text-emerald-900">81.8%</span>
                    <div className="w-12 bg-amber-500 rounded-t-lg transition-all" style={{ height: '82%' }}></div>
                    <span className="text-[11px] font-bold text-slate-900 mt-1">Term 2 (Current)</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono font-bold text-slate-400">84.0%</span>
                    <div className="w-12 bg-slate-300 rounded-t-lg border-2 border-dashed border-slate-400" style={{ height: '84%' }}></div>
                    <span className="text-[11px] font-medium text-slate-400 mt-1">Term 3 (Target)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Subject Marks Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                    <th className="py-3 px-3">Subject</th>
                    <th className="py-3 px-3">CAT (/30)</th>
                    <th className="py-3 px-3">Exam (/70)</th>
                    <th className="py-3 px-3">Total (/100)</th>
                    <th className="py-3 px-3">Grade</th>
                    <th className="py-3 px-3">Subject Teacher Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {academicRecord?.subjects.map((sub) => (
                    <tr key={sub.subjectName} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-semibold text-slate-900">{sub.subjectName}</td>
                      <td className="py-3 px-3 font-mono">{sub.catMark}</td>
                      <td className="py-3 px-3 font-mono">{sub.examMark}</td>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">{sub.totalMark}%</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 text-xs font-bold rounded bg-emerald-100 text-emerald-900 font-mono">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600 text-xs italic">{sub.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Comments Footer */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Class Teacher’s Remarks:</span>
                <p className="text-slate-600 italic">"{academicRecord?.classTeacherRemarks}"</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Principal’s Remarks:</span>
                <p className="text-slate-600 italic">"{academicRecord?.principalRemarks}"</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. TIMETABLE VIEW */}
      {activeTab === 'timetable' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Class Routine & Timetable
              </h2>
              <p className="text-xs text-slate-500">
                Schedule for {student.form} {student.stream} · Room 3G & Science Labs
              </p>
            </div>

            {/* Day Selector Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const).map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedDay === d
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {daySchedule.map((slot) => (
              <div
                key={slot.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{slot.subject}</h4>
                    <p className="text-xs text-slate-500">
                      Teacher: {slot.teacher} · Location: {slot.room}
                    </p>
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <span className="font-mono text-xs font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {slot.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. ASSIGNMENTS VIEW */}
      {activeTab === 'assignments' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Coursework Assignments & Submissions
              </h2>
              <p className="text-xs text-slate-500">
                View homework instructions, attachments, and upload your coursework answers.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-800">
              {assignments.length} Total Assignments
            </span>
          </div>

          {uploadToast && (
            <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{uploadToast}</span>
            </div>
          )}

          <div className="space-y-4">
            {assignments.map((task) => {
              const isSubmitted = !!submittedAssignments[task.id];
              return (
                <div
                  key={task.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">
                        {task.subject} · {task.form}
                      </span>
                      <h3 className="font-serif font-bold text-base text-slate-900">
                        {task.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Assigned by {task.teacherName} on {task.dateAssigned} · Due: <span className="font-bold text-rose-700">{task.dueDate}</span>
                      </p>
                    </div>

                    <div>
                      {isSubmitted ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-bold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <span>Submitted: {submittedAssignments[task.id]}</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleUploadAssignment(task.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Solution File</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                    {task.instructions}
                  </p>

                  {task.attachmentName && (
                    <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold">
                      <FileText className="w-4 h-4" />
                      <span>Attached Worksheet: {task.attachmentName}</span>
                      <button
                        onClick={() => alert(`Downloading attachment: ${task.attachmentName}`)}
                        className="underline hover:text-emerald-950 ml-2"
                      >
                        Download
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 6. ATTENDANCE VIEW */}
      {activeTab === 'attendance' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Official Attendance Records
              </h2>
              <p className="text-xs text-slate-500">
                Daily roll-call recorded by class teacher (Read-Only)
              </p>
            </div>
            <div className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-md text-xs font-bold font-mono">
              Overall: {student.attendanceRate}% Present
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500">Days Present</span>
              <p className="font-serif font-bold text-2xl text-emerald-800 mt-1">68 Days</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500">Excused Absences</span>
              <p className="font-serif font-bold text-2xl text-amber-700 mt-1">1 Day</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500">Late Arrivals</span>
              <p className="font-serif font-bold text-2xl text-slate-700 mt-1">0</p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
            * Attendance is taken twice daily during morning homeroom registration (7:00 AM) and afternoon prep (2:00 PM). Students cannot alter official attendance records.
          </div>
        </div>
      )}

      {/* 7. DIGITAL LIBRARY */}
      {activeTab === 'library' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Digital Study Library & Past Papers
              </h2>
              <p className="text-xs text-slate-500">
                Curated syllabus textbooks, KNEC past papers, and departmental revision notes.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-800 font-semibold">
              KICD Approved Materials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'KCSE Mathematics Paper 1 & 2 Revision Compilation (2020-2025)', size: '4.8 MB', dept: 'Mathematics' },
              { title: 'Form 3 Physics Complete Notes & Diagrams (KLB Syllabus)', size: '6.2 MB', dept: 'Sciences' },
              { title: 'Biology Paper 3 Practical Manual & Specimen Guide', size: '3.5 MB', dept: 'Sciences' },
              { title: 'English Paper 2 & Set-Book Literary Essays Guide', size: '2.9 MB', dept: 'Languages' },
              { title: 'History & Government Form 3 Paper 1 & 2 Quick Revision', size: '3.1 MB', dept: 'Humanities' },
              { title: 'Chemistry Volumetric & Qualitative Analysis Handbook', size: '4.1 MB', dept: 'Sciences' },
            ].map((book, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-700 font-bold uppercase">{book.dept}</span>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 leading-snug">{book.title}</h4>
                  <span className="text-[11px] text-slate-400 font-mono">{book.size} · PDF</span>
                </div>
                <button
                  onClick={() => alert(`Downloading: ${book.title}`)}
                  className="p-2 text-emerald-800 hover:bg-emerald-100 rounded-lg transition-colors shrink-0"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. CLUBS & ACTIVITIES */}
      {activeTab === 'clubs' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="font-serif font-bold text-xl text-slate-900">
              Clubs, Societies & Sports Participation
            </h2>
            <p className="text-xs text-slate-500">
              Co-curricular involvement for {student.fullName}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-xs font-mono font-bold text-emerald-800 uppercase">Science & Innovation Club</span>
              <h4 className="font-bold text-sm text-slate-900 mt-1">Official Member & Project Leader</h4>
              <p className="text-xs text-slate-600 mt-1">
                Representing the school in the Sub-County Kenya Science & Engineering Fair (Physics and Technology category).
              </p>
              <div className="mt-3 text-[11px] text-slate-400 font-mono">Meets: Wednesdays 4:00 PM</div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <span className="text-xs font-mono font-bold text-amber-700 uppercase">Kenya Red Cross Society</span>
              <h4 className="font-bold text-sm text-slate-900 mt-1">First Aid Youth Cadet</h4>
              <p className="text-xs text-slate-600 mt-1">
                Trained in campus first aid emergency response, sports field assistance, and community environmental hygiene.
              </p>
              <div className="mt-3 text-[11px] text-slate-400 font-mono">Meets: Fridays 4:00 PM</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
