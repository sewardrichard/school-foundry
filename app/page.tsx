'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import DatabaseSphere from '@/components/DatabaseSphere';
import {
  Printer,
  FileText,
  ReceiptText,
  Users,
  BarChart3,
  Cpu,
  Database,
  Globe,
  ArrowRight,
  Bot,
  MonitorSmartphone,
  Info,
  Calendar,
  MessageSquare,
  CreditCard,
  Smartphone,
  ClipboardList,
  ShieldCheck,
  WifiOff,
  Banknote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';


const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

/* ─── Scroll-aware section wrapper (fade-in on entry only) ─── */
function ScrollSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.97, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.15], [6, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.section ref={ref} id={id} className={className} style={{ opacity, y, scale, filter }}>
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="selection:bg-primary/30 selection:text-white overflow-x-hidden">

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#07090E] pt-20">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(249,115,22,0.12),transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute left-[-5%] bottom-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(249,115,22,0.04),transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

            {/* Left copy */}
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex flex-col justify-center">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary mb-8 font-mono text-[10px] sm:text-xs uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping flex-shrink-0" />
                <span>AN AFRICAN SCHOOL MANAGEMENT SYSTEM - SMS</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 leading-[0.95]">
                Your School, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-orange-600">
                  Modernized.
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-white/50 mb-10 max-w-xl leading-relaxed font-medium">
                Bring your school into the digital age; no internet required. From rural villages to capital cities, we're helping Southern African schools replace manual record keeping with digital school management that just works.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mb-14">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_20px_40px_-12px_rgba(249,115,22,0.4)] text-center min-w-[200px]"
                >
                  Request Demo
                </motion.a>
                <motion.a
                  href="#journeys"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/10 transition-all text-center min-w-[200px] backdrop-blur-md"
                >
                  Explore Versions
                </motion.a>
              </motion.div>

              <motion.div variants={FADE_UP} className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {[
                  ['100%', 'Offline'],
                  ['Easy to Use', 'For Everyone'],
                  ['Smart', 'Analytics'],
                ].map(([stat, label], i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tighter">{stat}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-2">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — 3D Database Sphere with floating glass cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center h-[650px]"
            >
              <div className="w-[600px] h-[600px] relative">
                <DatabaseSphere />
              </div>

              {/* Floating Glass Cards — clock positions */}
              {[
                { icon: ReceiptText, title: 'Record + Print', text: 'Instant thermal receipts', pos: 'top-0 left-1/2 -translate-x-1/2 translate-y-4', delay: 1.0, floatDelay: '0s' },
                { icon: FileText, title: 'Analytics', text: 'Visual school-wide data', pos: 'top-1/2 -right-6 -translate-y-1/2', delay: 1.2, floatDelay: '3s' },
                { icon: Cpu, title: 'Core OS', text: 'Works on any Windows PC', pos: 'bottom-0 left-1/2 -translate-x-1/2 -translate-y-4', delay: 1.4, floatDelay: '4.5s' },
                { icon: Database, title: 'Local Vault', text: 'Encryption by default', pos: 'top-1/2 -left-6 -translate-y-1/2', delay: 1.6, floatDelay: '1.5s' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
                  className={`absolute ${card.pos} cursor-default group`}
                  style={{ animation: `float 6s ease-in-out ${card.floatDelay} infinite` }}
                >
                  <div className="bg-[rgba(20,20,22,0.5)] backdrop-blur-xl border border-white/[0.08] rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(30,30,33,0.7)] hover:border-primary/20 hover:scale-[1.02]">
                    <div className="flex items-center gap-3 mb-1">
                      <card.icon className="w-4 h-4 text-primary" />
                      <p className="text-gray-100 font-bold tracking-wide text-sm uppercase">{card.title}</p>
                    </div>
                    <p className="text-gray-400 text-sm font-medium pl-7">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What exactly is SchoolFoundry? ─────────────────────────── */}
      <ScrollSection id="what-is-sms" className="py-16 sm:py-24 bg-[#07090E] relative">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">School Management, Simplified</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[520px] tracking-tight">
              What exactly is <span className="text-primary">SchoolFoundry?</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[520px] leading-[1.65]">
              Your school’s digital transformation partner. We replace paper-based school management systems with smart, offline technology that tracks every transaction, prints professional receipts, and gives you real-time insights into your school’s finances and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Student Tracking — wide */}
            <div className="md:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Student Tracking</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">A digital identity for every child which allows you to track their finances and more. Print student statements, fees and more</p>
            </div>

            {/* Payment Tracking */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ReceiptText className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Payment Tracking That Works</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Say goodbye to manual cash books and missing receipts. Every payment is captured digitally, backed up automatically, and ready for instant reporting whenever you need it.</p>
            </div>

            {/* Financial Confidence — full width */}
            <div className="md:col-span-3 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Lead with Financial Confidence</p>
              <p className="text-[13px] text-white/50 leading-[1.6] max-w-2xl">Forget spreadsheets and manual tallies. Get instant answers on collections, outstanding fees, and payment trends. Every decision backed by real-time data, not yesterdayl’s guesswork.</p>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ── Choose Your Journey Gateway ───────────────────── */}
      <ScrollSection id="journeys" className="py-16 sm:py-24 bg-[#0B0D13] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Two versions, one mission</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Pick the Right Fit <span className="text-primary">For Your School</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[480px] leading-[1.65]">
              Every school is different. Whether you’re running without reliable internet or you’re ready to go fully online, there’s a version of SchoolFoundry made for exactly where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Offline Bundle */}
            <Link href="/offline" className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors cursor-pointer group block">
              <div className="w-full h-80 bg-white/5 overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/offline-bundle.jpg`} alt="Thermal receipt printer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Printer className="w-[18px] h-[18px] text-white" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">The Offline Bundle</p>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                  No signal? No stress. Built for schools where the internet comes and goes, works completely offline and ships with its own fast receipt printer.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-[13px] group-hover:translate-x-1 transition-transform">
                  See the Offline Version <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Cloud Version */}
            <Link href="/online" className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors cursor-pointer group block">
              <div className="w-full h-80 bg-white/5 overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/online-cloud.jpg`} alt="Laptop and phone on desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-[18px] h-[18px] text-primary" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">Cloud Version</p>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                  Manage your school from any device. Our cloud version includes the full SIS suite, gradebooks, attendance, and integrated payments via WhatsApp, Card, and Mobile Money.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-[13px] group-hover:translate-x-1 transition-transform">
                  Explore the Cloud <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </ScrollSection>

      {/* ── What’s Included ───────────────────────────── */}
      <ScrollSection className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">What&apos;s included</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Tools that actually<br /><span className="text-primary">get work done.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[420px] leading-[1.65]">
              All features are available on the <span className="text-blue-500 font-medium">Cloud Version.</span> The Finance and Payments feature has limited capabilities on the offline version.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Finance & Payments (span 2) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Finance & Payments</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">
                Complete financial control. Generate invoices, track arrears, and accept fee payments directly via <strong className="text-white/70">Bank Cards</strong> or <strong className="text-white/70">Mobile Money</strong>. Generates <strong className="text-white/70">receipts for cash payments</strong> instantly.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-10">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/ecocash-logo.png`} alt="EcoCash" className="h-6 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-10">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/momo-logo.png`} alt="MTN MoMo" className="h-6 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-lg px-3 py-2 flex items-center justify-center h-10">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mpesa-logo.png`} alt="M-Pesa" className="h-6 w-auto object-contain" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-blue-500/10 text-blue-500 rounded px-2 py-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  Bank Cards
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-white/5 text-white/60 rounded px-2 py-1">
                  <Banknote className="w-3.5 h-3.5" />
                  Cash Receipts
                </span>
              </div>
              <span className="inline-block text-[10px] font-bold bg-orange-500/10 text-orange-500 rounded px-2 py-0.5 border border-orange-500/20 mt-3">Limited in Offline Version</span>
            </div>

            {/* AI School Assistant */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">AI School Assistant</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">A school AI assistant that knows everything about your school. Parents can check <strong className="text-white/70">account statements</strong> and <strong className="text-white/70">pay fees</strong> via M-Pesa, EcoCash, Momo, or Bank Card instantly. Communicate with parents and students via <strong className="text-white/70">WhatsApp</strong>.</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-[#25D366]/10 text-[#25D366] rounded px-2 py-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.23-1.24C8.7 21.56 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.36 14.29c-.23.64-1.34 1.23-1.85 1.3-.47.07-1.07.1-1.73-.11-.4-.13-.91-.31-1.56-.61-2.74-1.24-4.53-4.01-4.67-4.2-.14-.19-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.23.55.78 1.9.85 2.04.07.14.11.29.02.47-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.27.14.43.12.59-.07.16-.19.69-.8.87-1.08.18-.27.37-.23.62-.14.25.09 1.6.76 1.88.89.27.14.45.21.52.32.07.12.07.66-.16 1.3z"/></svg>
                  WhatsApp
                </span>
              </div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

            {/* 100% Offline + Admissions & Security merged */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <WifiOff className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">100% Offline</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Works without any internet connection. Every feature runs locally on your machine — no cloud dependency, no downtime when the network drops.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 rounded px-2 py-0.5 mt-2.5">Offline Version</span>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Admissions & Enrollment</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Digital applications, automated approval workflows, and onboarding processes to manage new intake.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 rounded px-2 py-0.5 mt-2.5">Offline Version</span>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Security & User Management</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Configurable roles and permissions to ensure data privacy and system security.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 rounded px-2 py-0.5 mt-2.5">Offline Version</span>
                </div>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Student Information (SIS)</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Centralized profiles storing academic records, attendance history, behavioral data, and documentation.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

            {/* Attendance + Gradebook merged (span 2) + Staff Portals */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Attendance & Scheduling</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Easy daily tracking and automated timetable management for classes, staff, and exams.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ClipboardList className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Gradebook & Reporting</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Digital recording of grades, progress tracking, and automated report card generation.</p>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
                </div>
              </div>
            </div>

            {/* Staff + Reporting */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MonitorSmartphone className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Staff & Teacher Portals</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Dedicated interfaces for managing materials, taking attendance, and entering grades.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Reporting & Analytics</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Real-time data reporting to support decision-making for leadership teams.</p>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Online Version</span>
            </div>

          </div>

          {/* Bottom info bar */}
          <div className="mt-6 px-5 py-4 bg-white/[0.03] rounded-xl flex items-center gap-4 text-[13px] text-white/50">
            <Info className="w-4 h-4 text-primary flex-shrink-0" />
            <span><strong className="text-white/70 font-medium">Full Suite:</strong> SIS, Admissions, Attendance, Gradebook, Finance, and Staff/Parent Portals are standard. Payments supported via WhatsApp, Bank Cards, M-Pesa, EcoCash, and Momo.</span>
          </div>
        </div>
      </ScrollSection>

      {/* ── Contact Form / CTA ───────────────────────────── */}
      <ScrollSection id="contact" className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">Get in touch</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Ready to start your school’s <span className="text-primary">new chapter?</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[480px] leading-[1.65]">
              Let’s have a chat and show you exactly how SchoolFoundry works. No complicated tech talk, no pressure, and definitely no commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Left — selling points */}
            <div className="bg-[#07090E] p-7 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.svg`} alt="SchoolFoundry" className="w-10 h-10" />
                <div>
                  <p className="text-white font-bold text-[16px] leading-tight">SchoolFoundry</p>
                  <p className="text-white/40 text-[11px]">School Management System</p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  'One-off payment—no annoying monthly bills',
                  'Works offline. No internet? No problem.',
                  'Simple setup—no IT degree required',
                  'Friendly guides included to help you along',
                  'Trusted by schools across Southern Africa',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70 font-bold text-[14px]">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-white/30 text-[12px] leading-[1.6]">Have questions? Reach out and our team will walk you through everything — from setup to your first receipt print.</p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#07090E] p-7 sm:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">School Name</label>
                    <Input data-testid="input-school-name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="e.g. Riverside High School" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                    <Input data-testid="input-your-name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="e.g. Themba Moyo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <Input data-testid="input-email" type="email" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="bursar@yourschool.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                    <Input data-testid="input-phone" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all placeholder:text-white/15" placeholder="Best number to reach you on" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">How can we help?</label>
                  <Textarea data-testid="textarea-school-info" className="bg-white/5 border-white/10 text-white min-h-[100px] rounded-xl focus:border-primary transition-all resize-none placeholder:text-white/15" placeholder="Tell us a little about your school—how many students do you have?" />
                </div>
                <Button data-testid="button-submit-demo" className="w-full h-14 text-base font-bold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                  Request a Friendly Demo
                </Button>
              </form>
            </div>

          </div>
        </div>
      </ScrollSection>
    </div>
  );
}
