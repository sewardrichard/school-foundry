'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SphereCanvas from '@/components/SpherCanvas';
import {
  Printer,
  FileText,
  ReceiptText,
  Users,
  BarChart3,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Lock,
  ArrowRight,
  Bot,
  MonitorSmartphone,
  Info
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

            {/* Right sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center h-[650px]"
            >
              <div className="w-[520px] h-[520px] relative">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full animate-pulse" />
                <SphereCanvas />
              </div>

              {/* Floating Cards — distributed like a clock */}
              {[
                { icon: ReceiptText, title: 'Record + Print', text: 'Instant thermal receipts', pos: 'top-0 left-1/2 -translate-x-1/2 translate-y-8', delay: 1.0 },
                { icon: FileText, title: 'Analytics', text: 'Visual school-wide data', pos: 'top-1/2 -right-6 -translate-y-1/2', delay: 1.2 },
                { icon: Cpu, title: 'Core OS', text: 'Works on any Windows PC', pos: 'bottom-0 left-1/2 -translate-x-1/2 -translate-y-8', delay: 1.4 },
                { icon: Database, title: 'Local Vault', text: 'Encryption by default', pos: 'top-1/2 -left-6 -translate-y-1/2', delay: 1.6 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`absolute ${card.pos} bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-5 shadow-2xl cursor-default group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-3 mb-1.5 relative z-10">
                    <card.icon className="w-4 h-4 text-primary" />
                    <p className="text-white font-bold tracking-tight text-sm uppercase">{card.title}</p>
                  </div>
                  <p className="text-white/40 text-xs font-medium relative z-10">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What exactly is SchoolFoundry? ─────────────────────────── */}
      <section id="what-is-sms" className="py-16 sm:py-24 bg-[#07090E] relative">
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
      </section>


      {/* ── Choose Your Journey Gateway ───────────────────── */}
      <section id="journeys" className="py-16 sm:py-24 bg-[#0B0D13] relative overflow-hidden">
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
              <div className="w-full h-48 bg-white/5 overflow-hidden">
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

            {/* Online Cloud */}
            <Link href="/online" className="bg-[#0B0D13] hover:bg-white/[0.03] transition-colors cursor-pointer group block">
              <div className="w-full h-48 bg-white/5 overflow-hidden">
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/online-cloud.jpg`} alt="Laptop and phone on desk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-[18px] h-[18px] text-primary" />
                </div>
                <p className="font-bold text-[15px] text-white mb-1">Online Cloud</p>
                <p className="text-[13px] text-white/50 leading-[1.6] mb-4">
                  Manage your school from any device, any time. Our cloud version handles payments, parent queries using AI on WhatsApp, automatically generates statements on request, and much more.
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-bold text-[13px] group-hover:translate-x-1 transition-transform">
                  Explore the Cloud <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* ── What’s Included ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#07090E]">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary mb-3">What&apos;s included</p>
            <h3 className="text-[32px] sm:text-[38px] font-black text-white leading-[1.1] mb-4 max-w-[480px] tracking-tight">
              Tools that actually<br /><span className="text-primary">get work done.</span>
            </h3>
            <p className="text-[15px] text-white/50 max-w-[420px] leading-[1.65]">
              Core features ship with every version. Look for the <span className="text-blue-500 font-medium">Cloud Only</span> tag where the Online version goes further.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

            {/* Row 1: Student Records (span 2) + Invoicing (1) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Student Records &amp; Enrollment</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">A permanent digital file for every learner — from first day to final grade. Add new students in under a minute and never lose a record again.</p>
              <div className="flex gap-6 mt-3">
                <div className="flex flex-col">
                  <span className="text-[22px] font-black text-primary leading-none">90%</span>
                  <span className="text-[11px] text-white/50 mt-0.5">less paperwork</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] font-black text-primary leading-none">1-click</span>
                  <span className="text-[11px] text-white/50 mt-0.5">backups</span>
                </div>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ReceiptText className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Fraud-Proof Invoicing</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Automated billing for fees, levies, and extras. Every cent is tracked — no edits, no gaps, no &quot;I forgot to write it down.&quot;</p>
            </div>

            {/* Row 2: Receipts + Dashboard merged (span 2) + Staff Permissions (1) */}
            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Printer className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Instant Receipts &amp; Statements</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Print thermal receipts on the spot or generate a full statement for any student in seconds. No digging through books.</p>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Principal&apos;s Dashboard</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">A live view of your school&apos;s health — finances, attendance, and academic progress at a glance, without running a single report manually.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Staff Permissions &amp; Audit Trails</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Control exactly who can see, edit, or approve. Every action is logged — so accountability isn&apos;t a question, it&apos;s a record.</p>
            </div>

            {/* Row 3: Academic History (1) + AI + Cloud Reports merged (span 2) */}
            <div className="bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Academic History</p>
              <p className="text-[13px] text-white/50 leading-[1.6]">Track grades, achievements, and progression for every learner across every term. A complete picture, always available.</p>
            </div>

            <div className="sm:col-span-2 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Bot className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">AI Parent Assistant</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Parents ask questions, the AI answers. Statement requests, fee balances, and school info handled automatically — without pulling your staff away.</p>
                  <span className="inline-block text-[10px] font-medium tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Cloud only</span>
                </div>
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MonitorSmartphone className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <p className="font-bold text-[15px] text-white mb-1">Live Cloud Reports</p>
                  <p className="text-[13px] text-white/50 leading-[1.6]">Access real-time school data from any device, anywhere. Check term performance or financial summaries without setting foot in the office.</p>
                  <span className="inline-block text-[10px] font-medium tracking-wider uppercase bg-blue-500/10 text-blue-500 rounded px-2 py-0.5 mt-2.5">Cloud only</span>
                </div>
              </div>
            </div>

            {/* Row 4: Bank-Level Security — full width */}
            <div className="sm:col-span-2 lg:col-span-3 bg-[#07090E] hover:bg-white/[0.03] transition-colors p-7 cursor-default">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Database className="w-[18px] h-[18px] text-primary" />
              </div>
              <p className="font-bold text-[15px] text-white mb-1">Bank-Level Security &amp; Backups</p>
              <p className="text-[13px] text-white/50 leading-[1.6] max-w-2xl">Encrypted by default. One-click backups mean your data is always safe — whether the power cuts or the laptop walks away.</p>
            </div>

          </div>

          {/* Bottom info bar */}
          <div className="mt-6 px-5 py-4 bg-white/[0.03] rounded-xl flex items-center gap-4 text-[13px] text-white/50">
            <Info className="w-4 h-4 text-primary flex-shrink-0" />
            <span><strong className="text-white/70 font-medium">Every version</strong> includes enrollment, invoicing, receipts, staff controls, academic history, and encrypted backups. <strong className="text-white/70 font-medium">Cloud Only</strong> features require the Online Cloud plan.</span>
          </div>
        </div>
      </section>


      {/* ── Contact Form / CTA ───────────────────────────── */}
      <section id="contact" className="py-16 sm:py-24 bg-[#07090E]">
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
              <div className="space-y-5">
                {[
                  'One-off payment—no annoying monthly bills',
                  'Works offline. No internet? No problem.',
                  'Simple setup—no IT degree required',
                  'Friendly guides included to help you along',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70 font-bold text-[14px]">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#07090E] p-7 sm:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">School Name</label>
                    <Input data-testid="input-school-name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all" placeholder="e.g. Riverside High School" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                    <Input data-testid="input-your-name" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all" placeholder="e.g. Themba Moyo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <Input data-testid="input-email" type="email" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all" placeholder="bursar@yourschool.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                    <Input data-testid="input-phone" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary transition-all" placeholder="Best number to reach you on" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest">How can we help?</label>
                  <Textarea data-testid="textarea-school-info" className="bg-white/5 border-white/10 text-white min-h-[100px] rounded-xl focus:border-primary transition-all resize-none" placeholder="Tell us a little about your school—how many students do you have?" />
                </div>
                <Button data-testid="button-submit-demo" className="w-full h-14 text-base font-bold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                  Request a Friendly Demo
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
