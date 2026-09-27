import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  CheckSquare,
  FileSpreadsheet,
  Calendar,
  Clock,
  Plus,
  Save,
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  UserCheck,
  Eye,
  Filter,
} from 'lucide-react';
import { Teacher, Student, AcademicRecord, Assignment, TimetableSlot } from '../../types/portal';

interface TeacherPortalProps {
  teacher: Teacher;
  students: Student[];
  academicRecords: AcademicRecord[];
  assignments: Assignment[];
  timetable: TimetableSlot[];
  onSaveMarks: (recordId: string, updatedSubjects: any[], submitForApproval: boolean) => void;
  onSaveAttendance: (classStream: string, date: string, records: Record<string, string>) => void;
  onCreateAssignment: (assignment: Partial<Assignment>) => void;
  activeTab: string;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({
  teacher,
  students,
  academicRecords,
  assignments,
  timetable,
  onSaveMarks,
  onSaveAttendance,
  onCreateAssignment,
  activeTab,
}) => {
  // Class filter (only classes assigned to this teacher!)
  const [selectedClass, setSelectedClass] = useState<string>(teacher.assignedClasses[0] || 'Form 3 Green');
  const [selectedSubject, setSelectedSubject] = useState<string>(teacher.subjectsTaught[0] || 'Mathematics');

  // Attendance recording state
  const [attendanceDate, setAttendanceDate] = useState<string>('2026-09-27');
  const [attendanceState, setAttendanceState] = useState<Record<string, 'Present' | 'Absent' | 'Late'>>({
    'student-1': 'Present',
    'student-3': 'Present',
  });
  const [attendanceSuccess, setAttendanceSuccess] = useState(false);

  // Marks entry state
  const [editableMarks, setEditableMarks] = useState<Record<string, { cat: number; exam: number; remarks: string }>>({
    'student-1': { cat: 27, exam: 58, remarks: 'Excellent grasp of mathematical logic.' },
    'student-3': { cat: 22, exam: 48, remarks: 'Good effort, needs extra work on calculus.' },
  });
  const [marksToast, setMarksToast] = useState<string | null>(null);

  // New assignment modal / form state
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('2026-10-08');
  const [newInstructions, setNewInstructions] = useState('');
  const [assignmentSuccess, setAssignmentSuccess] = useState(false);

  // Filter students to only authorized classes!
  const classStudents = students.filter(
    (s) => `${s.form} ${s.stream}` === selectedClass
  );

  const teacherSchedule = timetable.filter(
    (slot) => slot.teacher.includes(teacher.fullName.split(' ')[1] || 'Daniel')
  );

  const handleSaveAttendanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveAttendance(selectedClass, attendanceDate, attendanceState);
    setAttendanceSuccess(true);
    setTimeout(() => setAttendanceSuccess(false), 3000);
  };

  const handleSaveMarksSubmit = (submitForApproval: boolean) => {
    const currentRec = academicRecords.find((r) => r.studentId === 'student-1');
    if (currentRec) {
      onSaveMarks(currentRec.id, currentRec.subjects, submitForApproval);
      setMarksToast(
        submitForApproval
          ? 'Marks submitted successfully! Awaiting Administrator official authorization & publishing.'
          : 'Draft marks saved successfully.'
      );
      setTimeout(() => setMarksToast(null), 3500);
    }
  };

  const handleCreateAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    onCreateAssignment({
      title: newTitle,
      subject: selectedSubject,
      form: selectedClass.split(' ')[0] || 'Form 3',
      stream: selectedClass.split(' ')[1] || 'Green',
      teacherName: teacher.fullName,
      dateAssigned: new Date().toISOString().split('T')[0],
      dueDate: newDueDate,
      instructions: newInstructions,
    });

    setAssignmentSuccess(true);
    setNewTitle('');
    setNewInstructions('');
    setTimeout(() => setAssignmentSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* 1. TEACHER DASHBOARD */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          {/* Welcome Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
                  Faculty Workspace
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Welcome, {teacher.fullName}
              </h1>
              <p className="text-xs text-slate-300 mt-1">
                Staff ID: <span className="font-mono font-bold text-white">{teacher.staffId}</span> · {teacher.department}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {teacher.assignedClasses.map((c) => (
                  <span key={c} className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-emerald-300 text-xs font-mono font-bold">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                <span className="text-[11px] text-slate-400 block">Subjects Taught</span>
                <span className="font-mono font-bold text-base text-white">{teacher.subjectsTaught.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Assigned Classes</span>
              <p className="font-serif font-bold text-2xl text-slate-900 mt-1">
                {teacher.assignedClasses.length} Streams
              </p>
              <p className="text-[11px] text-emerald-700 mt-0.5">Form 3 Green & Form 2 Gold</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Total Enrolled Students</span>
              <p className="font-serif font-bold text-2xl text-slate-900 mt-1">
                85 Learners
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">Across assigned subjects</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Pending Coursework Submissions</span>
              <p className="font-serif font-bold text-2xl text-amber-700 mt-1">
                67 Submissions
              </p>
              <p className="text-[11px] text-amber-700 mt-0.5">To review before term deadline</p>
            </div>
          </div>

          {/* Today's Teaching Schedule & Assigned Classes Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-serif font-bold text-base text-slate-900">
                  Today's Teaching Schedule (Monday)
                </h3>
                <span className="text-xs text-slate-500 font-mono">4 Lessons Scheduled</span>
              </div>

              <div className="space-y-3">
                {teacherSchedule.slice(0, 4).map((slot) => (
                  <div key={slot.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">
                        {slot.subject} ({slot.form} {slot.stream})
                      </p>
                      <p className="text-xs text-slate-500">Room: {slot.room}</p>
                    </div>
                    <span className="font-mono text-xs font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-serif font-bold text-base text-slate-900">
                  Quick Actions
                </h3>
                <p className="text-xs text-slate-500">Fast access to daily instructional duties</p>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs">
                  <span className="font-bold text-blue-950 block">Record Morning Attendance</span>
                  <p className="text-blue-800 text-[11px] mt-0.5">Select class stream to take roll-call for today.</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs">
                  <span className="font-bold text-emerald-950 block">Enter Assessment Results</span>
                  <p className="text-emerald-800 text-[11px] mt-0.5">Input CAT and End-Term examination marks for approval.</p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                  <span className="font-bold text-amber-950 block">Publish Homework Assignment</span>
                  <p className="text-amber-800 text-[11px] mt-0.5">Create instructions and set due date for students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. MY CLASSES & STUDENT ROSTER (AUTHORIZED ONLY) */}
      {activeTab === 'classes' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                My Assigned Classes & Student Roster
              </h2>
              <p className="text-xs text-slate-500">
                You are authorized to view students enrolled in your teaching streams.
              </p>
            </div>

            {/* Class Stream Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Select Stream:</span>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white font-bold text-slate-900 focus:ring-2 focus:ring-emerald-700"
              >
                {teacher.assignedClasses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Student Roster Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <th className="py-2.5 px-3">Adm No.</th>
                  <th className="py-2.5 px-3">Student Full Name</th>
                  <th className="py-2.5 px-3">Stream</th>
                  <th className="py-2.5 px-3">Attendance Rate</th>
                  <th className="py-2.5 px-3">Guardian Name</th>
                  <th className="py-2.5 px-3">Emergency Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {classStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-mono font-bold text-emerald-800">{s.admissionNumber}</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">{s.fullName}</td>
                    <td className="py-3 px-3">{s.form} {s.stream}</td>
                    <td className="py-3 px-3 font-mono font-bold text-slate-800">{s.attendanceRate}%</td>
                    <td className="py-3 px-3">{s.guardianName}</td>
                    <td className="py-3 px-3 font-mono text-slate-600">{s.guardianPhone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 italic">
            * Note: Teachers cannot access students outside authorized classes without administrative override.
          </p>
        </div>
      )}

      {/* 3. MARKS / RESULTS ENTRY INTERFACE */}
      {activeTab === 'marks' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Examination & CAT Marks Entry
              </h2>
              <p className="text-xs text-slate-500">
                Input Continuous Assessment (CAT) and End-Term examination marks for Form 3 Green.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">Subject:</span>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white font-bold text-slate-900"
              >
                {teacher.subjectsTaught.map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          </div>

          {marksToast && (
            <div className="p-3.5 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{marksToast}</span>
            </div>
          )}

          {/* Interactive Marks Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                  <th className="py-2.5 px-3">Adm No.</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">CAT Mark (/30)</th>
                  <th className="py-2.5 px-3">Exam Mark (/70)</th>
                  <th className="py-2.5 px-3">Total (/100)</th>
                  <th className="py-2.5 px-3">Teacher Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {classStudents.map((s) => {
                  const current = editableMarks[s.id] || { cat: 25, exam: 55, remarks: 'Good work.' };
                  const total = current.cat + current.exam;
                  return (
                    <tr key={s.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-mono font-bold text-slate-800">{s.admissionNumber}</td>
                      <td className="py-3 px-3 font-semibold text-slate-900">{s.fullName}</td>
                      <td className="py-3 px-3">
                        <input
                          type="number"
                          max={30}
                          min={0}
                          value={current.cat}
                          onChange={(e) =>
                            setEditableMarks({
                              ...editableMarks,
                              [s.id]: { ...current, cat: Number(e.target.value) },
                            })
                          }
                          className="w-16 px-2 py-1 text-xs font-mono font-bold rounded-lg border border-slate-300 text-center"
                        />
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="number"
                          max={70}
                          min={0}
                          value={current.exam}
                          onChange={(e) =>
                            setEditableMarks({
                              ...editableMarks,
                              [s.id]: { ...current, exam: Number(e.target.value) },
                            })
                          }
                          className="w-16 px-2 py-1 text-xs font-mono font-bold rounded-lg border border-slate-300 text-center"
                        />
                      </td>
                      <td className="py-3 px-3 font-mono font-bold text-emerald-800 text-sm">
                        {total}%
                      </td>
                      <td className="py-3 px-3">
                        <input
                          type="text"
                          value={current.remarks}
                          onChange={(e) =>
                            setEditableMarks({
                              ...editableMarks,
                              [s.id]: { ...current, remarks: e.target.value },
                            })
                          }
                          className="w-full px-2.5 py-1 text-xs rounded-lg border border-slate-300"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Action Buttons: Save Draft vs Submit Results */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              * Submitted marks require official School Administration authorization before being published to parents and students.
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSaveMarksSubmit(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Draft</span>
              </button>

              <button
                type="button"
                onClick={() => handleSaveMarksSubmit(true)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Results to Admin</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. ATTENDANCE MANAGEMENT */}
      {activeTab === 'attendance' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Daily Roll-Call & Attendance Recording
              </h2>
              <p className="text-xs text-slate-500">
                Select class and date to take attendance. Historical changes require administrator authorization.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 font-mono"
              />

              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-300 bg-white font-bold"
              >
                {teacher.assignedClasses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {attendanceSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Attendance for {selectedClass} on {attendanceDate} has been saved and logged.</span>
            </div>
          )}

          <form onSubmit={handleSaveAttendanceSubmit} className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-mono text-[11px] uppercase">
                    <th className="py-2.5 px-3">Adm No.</th>
                    <th className="py-2.5 px-3">Student Full Name</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {classStudents.map((s) => {
                    const status = attendanceState[s.id] || 'Present';
                    return (
                      <tr key={s.id} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-mono font-bold text-slate-800">{s.admissionNumber}</td>
                        <td className="py-3 px-3 font-semibold text-slate-900">{s.fullName}</td>
                        <td className="py-3 px-3">
                          <div className="flex items-center justify-center gap-3">
                            <label className="inline-flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name={`att-${s.id}`}
                                checked={status === 'Present'}
                                onChange={() =>
                                  setAttendanceState({ ...attendanceState, [s.id]: 'Present' })
                                }
                                className="text-emerald-700 focus:ring-emerald-700"
                              />
                              <span className="text-xs font-bold text-emerald-800">Present</span>
                            </label>

                            <label className="inline-flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name={`att-${s.id}`}
                                checked={status === 'Absent'}
                                onChange={() =>
                                  setAttendanceState({ ...attendanceState, [s.id]: 'Absent' })
                                }
                                className="text-rose-700 focus:ring-rose-700"
                              />
                              <span className="text-xs font-bold text-rose-800">Absent</span>
                            </label>

                            <label className="inline-flex items-center gap-1 cursor-pointer">
                              <input
                                type="radio"
                                name={`att-${s.id}`}
                                checked={status === 'Late'}
                                onChange={() =>
                                  setAttendanceState({ ...attendanceState, [s.id]: 'Late' })
                                }
                                className="text-amber-700 focus:ring-amber-700"
                              />
                              <span className="text-xs font-bold text-amber-800">Late</span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow transition-colors"
              >
                <CheckSquare className="w-4 h-4" />
                <span>Save Attendance Record</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 5. ASSIGNMENTS MANAGEMENT */}
      {activeTab === 'assignments' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                Coursework Assignments & Submissions
              </h2>
              <p className="text-xs text-slate-500">
                Create new homework assignments, attach instructions, and monitor student submissions.
              </p>
            </div>
          </div>

          {assignmentSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Assignment created and dispatched to student portal dashboards!</span>
            </div>
          )}

          {/* New Assignment Creation Form */}
          <form onSubmit={handleCreateAssignmentSubmit} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-serif font-bold text-sm text-slate-900">
              Create New Assignment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Assignment Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Chemical Bonding & Molecular Formulas Exercise"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  required
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-mono focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Detailed Instructions
              </label>
              <textarea
                rows={3}
                required
                value={newInstructions}
                onChange={(e) => setNewInstructions(e.target.value)}
                placeholder="Specify questions from textbook, formatting requirements, and guidelines..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 resize-y"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-800 hover:bg-blue-900 rounded-xl shadow transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Publish Assignment to Students</span>
              </button>
            </div>
          </form>

          {/* Active Assignments List */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm text-slate-900">
              Active Coursework Assignments
            </h3>
            {assignments.map((task) => (
              <div key={task.id} className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">
                    {task.subject} · {task.form}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900">{task.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Assigned: {task.dateAssigned} · Due: {task.dueDate} · Submissions: <span className="font-bold text-emerald-800">{task.submissionsCount || 29} Turned In</span>
                  </p>
                </div>

                <button
                  onClick={() => alert(`Reviewing submissions for ${task.title}`)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors shrink-0"
                >
                  Grade Submissions
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
