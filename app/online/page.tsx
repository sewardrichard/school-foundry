'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Bot,
  MessageSquare,
  CreditCard,
  Users,
  BarChart3,
  Calendar,
  ClipboardList,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Banknote,
  ArrowRight,
  Sparkles,
  Zap,
  Bell,
  FileText,
  GraduationCap,
  CircleDollarSign,
  CheckCircle2,
  Construction,
} from 'lucide-react';

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-[#07090E] selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* ── Fixed Coming Soon Banner (sticks below nav) ── */}
      <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-blue-500 to-primary py-2.5 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-white text-sm font-bold">
          <Construction className="w-4 h-4" />
          <span>Cloud Version — Coming Soon</span>
          <span className="hidden sm:inline text-white/70 font-medium">· Join the waitlist to get early access</span>
        </div>
      </div>

      {/* ── Spacer for fixed nav + banner ── */}
      <div className="h-[108px] sm:h-[116px]" />

      {/* ── Hero Section ── */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left copy */}
            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6 font-mono text-[10px] uppercase tracking-widest w-fit">
                <Globe className="w-3.5 h-3.5" />
                Cloud Version
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                Any Device,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-500 to-primary">Zero Data Loss.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-white/50 mb-8 max-w-xl leading-relaxed font-medium">
                Manage your entire school from any device, anywhere. The Cloud Version brings WhatsApp-native parent communication, mobile money payments, AI-powered analytics, and a full Student Information System — all accessible from a browser.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold text-base hover:bg-blue-600 transition-all shadow-[0_20px_40px_-12px_rgba(59,130,246,0.4)]">
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#features" className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-base border border-white/10 transition-all backdrop-blur-md">
                  See Features
                </a>
              </motion.div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/online-cloud.jpg`}
                alt="SchoolFoundry Cloud — manage your school from any device"
                className="w-full rounded-3xl shadow-2xl shadow-blue-500/10 border border-white/5"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Built for Southern Africa</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              What makes this SMS <span className="text-blue-400">stand out.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              Most school management systems are built for Western markets. SchoolFoundry is built from the ground up for how schools in Zambia, Zimbabwe, and the region actually operate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* WhatsApp-Native (wide) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center mb-4">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
              </div>
              <p className="font-bold text-[15px] text-white mb-1">WhatsApp-Native Communication</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Parents don't need to download an app. They text your school's WhatsApp number powered by an AI bot. Check balances, request statements, receive payment reminders, and even <strong className="text-white/70">pay fees directly via WhatsApp</strong> — all in the language they speak.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">AI Bot</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">Payment Links</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">PDF Statements</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">Auto Reminders</span>
              </div>
            </div>

            {/* Local Payments */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CircleDollarSign className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Local Payment Methods</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                EcoCash, Momo, M-Pesa, bank cards, and cash. Parents pay how they want — we reconcile automatically.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ecocash-logo.png`} alt="EcoCash" className="h-4 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/momo-logo.png`} alt="MTN MoMo" className="h-4 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mpesa-logo.png`} alt="M-Pesa" className="h-4 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* AI Analytics */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">AI-Powered Analytics</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Automatically spot trends in fee payments, flag at-risk students, and generate board-ready reports. Your data works for you — not the other way around.
              </p>
            </div>

            {/* Multi-Device (wide) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <MonitorSmartphone className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Access From Any Device</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Desktop, laptop, tablet, or phone — the bursar can issue a receipt from the office while the principal reviews analytics from home. Real-time sync means everyone sees the same data, always.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Full Feature Grid ── */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Everything you need</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              The full suite,<br /><span className="text-blue-400">cloud-powered.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              Every feature from the Offline Bundle plus the full Student Information System, gradebooks, attendance, and cloud-only capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Finance & Payments (wide) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Finance & Payments</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Complete financial control with <strong className="text-white/70">mobile money</strong>, <strong className="text-white/70">bank cards</strong>, <strong className="text-white/70">WhatsApp payments</strong>, and cash receipts. Automatic reconciliation, arrears tracking, and instant invoicing.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ecocash-logo.png`} alt="EcoCash" className="h-4 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/momo-logo.png`} alt="MTN MoMo" className="h-4 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-md px-2 py-1 flex items-center justify-center h-7">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mpesa-logo.png`} alt="M-Pesa" className="h-4 w-auto object-contain" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-500/10 text-blue-400 rounded px-2 py-1"><CreditCard className="w-3.5 h-3.5" />Bank Cards</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">WhatsApp Pay</span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-white/5 text-white/60 rounded px-2 py-1"><Banknote className="w-3.5 h-3.5" />Cash</span>
              </div>
            </div>

            {/* AI School Assistant */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">AI School Assistant</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                An AI that knows your school. Parents ask questions, request statements, and pay fees — all via WhatsApp. Staff get automated insights and alerts.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
                  WhatsApp
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-primary/10 text-primary rounded px-2 py-1"><Sparkles className="w-3.5 h-3.5" />AI</span>
              </div>
            </div>

            {/* Student Information System + Admissions merged (wide) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Users className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Student Information (SIS)</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Centralized profiles with academic records, attendance history, behavioral data, and documentation. One view per student — everything at your fingertips.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <FileText className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Admissions & Enrollment</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Digital applications, automated approval workflows, and onboarding processes. From application to first day — fully digitized.</p>
                </div>
              </div>
            </div>

            {/* Attendance & Scheduling */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Calendar className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Attendance & Scheduling</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Daily tracking, automated timetable management, and absence alerts sent straight to parents via WhatsApp.</p>
            </div>

            {/* Gradebook & Reporting + Staff Portals merged (wide) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Gradebook & Reports</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Digital grade entry, progress tracking, and automated report card generation. Parents receive reports via WhatsApp.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <MonitorSmartphone className="w-[18px] h-[18px] text-blue-400" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Staff & Teacher Portals</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Dedicated interfaces for managing materials, taking attendance, entering grades, and communicating with parents.</p>
                </div>
              </div>
            </div>

            {/* Analytics (wide) */}
            <div className="lg:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Automated Analytics & Reporting</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                AI-generated insights on collections, outstanding fees, enrollment trends, and student performance. Board-ready reports generated automatically — no spreadsheets, no manual tallying.
              </p>
            </div>

            {/* Security */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Bank-Level Security</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">End-to-end encryption, role-based access, audit trails, and POPIA-compliant data handling. Your school's data is safe.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Cloud Roadmap ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">The plan</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Cloud <span className="text-blue-400">Roadmap.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              We're building the Cloud Version in phases. Each phase is designed to add real value — not just tick feature boxes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">P1</div>
              <p className="font-bold text-[15px] text-white mb-2">Cloud Migration</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Move existing Offline records to secure cloud infrastructure. Zero data loss, automatic backups, and access from any device.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">P2</div>
              <p className="font-bold text-[15px] text-white mb-2">Mobile Money & Cards</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Accept EcoCash, Momo, M-Pesa, and bank card payments directly through the platform with automatic reconciliation.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">P3</div>
              <p className="font-bold text-[15px] text-white mb-2">WhatsApp & AI</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">AI-powered WhatsApp bot for parent communication, fee payments via chat, automated payment reminders, and PDF statement delivery.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg mb-4">P4</div>
              <p className="font-bold text-[15px] text-white mb-2">Full SIS & Gradebook</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Complete Student Information System with attendance tracking, gradebooks, report cards, and teacher/staff portals.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Cloud vs Offline ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Cloud vs Offline</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              When to go <span className="text-blue-400">cloud.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">Your school has reliable internet</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">If you have consistent connectivity — even mobile data — the Cloud Version unlocks real-time sync, multi-device access, and WhatsApp integrations that the Offline Bundle can't offer.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">Parents want self-service</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Parents check balances, download statements, and pay fees directly via WhatsApp or the web portal. No more queuing at the bursar's office for a balance enquiry.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">You need mobile money</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">The Offline Bundle handles cash and thermal receipts. The Cloud Version adds EcoCash, Momo, M-Pesa, bank cards, and WhatsApp payments with automatic reconciliation.</p>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <p className="font-bold text-[15px] text-white mb-2">Multiple campuses or staff</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">The bursar, principal, and teachers all need access to the same data. Cloud sync means everyone works from the same source of truth — no more emailing spreadsheets around.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-blue-400 mb-3">Coming soon</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Get early access to the <span className="text-blue-400">Cloud Version.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Left — selling points */}
            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center">
              <div className="space-y-4">
                {[
                  'Everything in the Offline Bundle — plus more',
                  'WhatsApp AI bot for parent communication',
                  'Mobile money & card payments built in',
                  'Access from any device, anywhere',
                  'Automated analytics & board-ready reports',
                  'Priority onboarding for early adopters',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-[14px] text-white/80 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="bg-[#0B0D13] p-7 sm:p-10 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">The Cloud Version</h4>
              <p className="text-[13px] text-white/50 mb-6 max-w-sm leading-relaxed">
                We're building the next generation of school management for Southern Africa. Join the waitlist to be the first to know when it launches.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-2xl font-bold text-base hover:bg-blue-600 transition-all shadow-[0_20px_40px_-12px_rgba(59,130,246,0.4)]"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
