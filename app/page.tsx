'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SphereCanvas from '@/components/SpherCanvas';
import {
  Zap,
  Printer,
  FileText,
  ListOrdered,
  ReceiptText,
  Users,
  BarChart3,
  Cpu,
  Database,
  Activity,
  Globe,
  GraduationCap,
  Lock,
  ArrowRight
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

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const SLIDE_LEFT = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const SLIDE_RIGHT = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
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
                Modernise your Payments, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-orange-400 to-orange-600">
                  Empower your School.
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
                { icon: ReceiptText, title: 'Record + Print', text: 'Instant thermal receipts', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-4', delay: 1.0 },
                { icon: FileText, title: 'Analytics', text: 'Visual school-wide data', pos: 'top-1/2 -right-6 -translate-y-1/2', delay: 1.2 },
                { icon: Cpu, title: 'Core OS', text: 'Works on any Windows PC', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-4', delay: 1.4 },
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
      <section id="what-is-sms" className="py-24 sm:py-36 bg-[#07090E] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <span className="text-primary font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">School Management, Simplified</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 mb-8 leading-tight tracking-tighter">
                What exactly is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">SchoolFoundry?</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed font-medium max-w-3xl mx-auto">
                Your school's digital transformation partner. We replace paper-based school management systems with smart, offline technology that tracks every transaction, prints professional receipts, and gives you real-time insights into your school's finances and more.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: 'Student Tracking',
                desc: 'A digital identity for every child which allows you to track their finances and more. Print student statements, fees and more'
              },
              {
                icon: ReceiptText,
                title: 'Payment Tracking That Works',
                desc: 'Say goodbye to manual cash books and missing receipts. Every payment is captured digitally, backed up automatically, and ready for instant reporting whenever you need it.'
              },
              {
                icon: BarChart3,
                title: 'Lead with Financial Confidence',
                desc: 'Forget spreadsheets and manual tallies. Get instant answers on collections, outstanding fees, and payment trends. Every decision backed by real-time data, not yesterdayl’s guesswork.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SCALE_IN}
                className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10 tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-base leading-relaxed font-medium relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Choose Your Journey Gateway ─────────────────────── */}
      <section id="journeys" className="py-24 sm:py-36 bg-[#0B0D13] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">Pick the Right Fit <span className="text-primary">For Your School</span></h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">Every school is different. Whether you're running without reliable internet or you're ready to go fully online, there's a version of SchoolFoundry made for exactly where you are.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Offline Bundle Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group relative">
              <Link href="/offline" className="block bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-56 bg-white/5">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/offline-bundle.jpg`} alt="Thermal receipt printer" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative z-10 flex-1 p-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 shadow-xl">
                    <Printer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">The Offline Bundle</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8">
                    No signal? No stress. Built for schools where the internet comes and goes, works completely offline and ships with its own fast receipt printer.
                  </p>
                </div>
                <div className="relative z-10 mt-auto px-10 pb-10 flex items-center gap-3 text-primary font-bold text-lg group-hover:translate-x-2 transition-transform">
                  See the Offline Version <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

            {/* Online Cloud Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group relative">
              <Link href="/online" className="block bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-56 bg-white/5">
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/online-cloud.jpg`} alt="Laptop and phone on desk" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative z-10 flex-1 p-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 shadow-xl">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Online Cloud</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8">
                    Manage your school from any device, any time. Our cloud version handles payments, parent queries using AI on WhatsApp, automatically generates statements on request, and much more.
                  </p>
                </div>
                <div className="relative z-10 mt-auto px-10 pb-10 flex items-center gap-3 text-primary font-bold text-lg group-hover:translate-x-2 transition-transform">
                  Explore the Cloud <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Core Capabilities ─────────────────────────────── */}
      <section className="py-24 sm:py-36 bg-[#07090E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-6">Packed With the Right Tools</h3>
            <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">SchoolFoundry comes ready to manage your admin work from day one. Core features are available in both versions, with select advanced tools reserved for the Online Cloud.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ListOrdered, label: 'Easy Enrollment', desc: 'Add new students in seconds, not hours.' },
              { icon: ReceiptText, label: 'Smart Invoicing', desc: 'Generate bills for terms and extra-curriculars.' },
              { icon: Activity, label: 'Total Accountability', desc: 'Track every action so nothing goes missing.' },
              { icon: Users, label: 'Staff Permissions', desc: 'You decide who sees what in the office.' },
              { icon: FileText, label: 'Instant Statements', desc: 'Print or share reports for any student, any time.' },
              { icon: GraduationCap, label: 'Academic History', desc: 'Keep track of every grade and achievement.' },
              { icon: Database, label: 'Worry-Free Backups', desc: 'Never lose a single record again. Period.' },
              { icon: Lock, label: 'Bank-Level Security', desc: 'Your data is encrypted and safe from prying eyes.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-white text-lg mb-2">{item.label}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form / CTA ─────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-48 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-[#07090E] rounded-[3rem] p-10 sm:p-20 shadow-2xl flex flex-col lg:flex-row gap-20 items-center">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_LEFT} className="lg:w-1/2">
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">Ready to start your school’s new chapter?</h2>
              <p className="text-white/50 text-xl mb-10 font-medium leading-relaxed">Let’s have a chat and show you exactly how SchoolFoundry works. No complicated tech talk, no pressure, and definitely no commitment.</p>

              <div className="space-y-4">
                {[
                  'One-off payment—no annoying monthly bills',
                  'Works offline. No internet? No problem.',
                  'Simple setup—no IT degree required',
                  'Friendly guides included to help you along',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70 font-bold">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_RIGHT} className="lg:w-1/2 w-full">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">School Name</label>
                    <Input data-testid="input-school-name" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-primary transition-all" placeholder="e.g. Riverside High School" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                    <Input data-testid="input-your-name" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-primary transition-all" placeholder="e.g. Themba Moyo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <Input data-testid="input-email" type="email" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-primary transition-all" placeholder="bursar@yourschool.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                    <Input data-testid="input-phone" className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-primary transition-all" placeholder="Best number to reach you on" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">How can we help?</label>
                  <Textarea data-testid="textarea-school-info" className="bg-white/5 border-white/10 text-white min-h-[120px] rounded-xl focus:border-primary transition-all resize-none" placeholder="Tell us a little about your school—how many students do you have?" />
                </div>
                <Button data-testid="button-submit-demo" className="w-full h-16 text-xl font-bold rounded-2xl bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all">
                  Request a Friendly Demo
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
