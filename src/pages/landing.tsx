import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SphereCanvas from '@/components/SpherCanvas';
import {
  Zap,
  Clock,
  Search,
  FolderX,
  Archive,
  LineChart,
  Printer,
  FileText,
  ListOrdered,
  ReceiptText,
  HardDrive,
  Mail,
  MapPin,
  ChevronRight,
  Target,
  Heart,
  Users,
  UserPlus,
  GraduationCap,
  School,
  CheckCircle,
  XCircle,
  BarChart3,
  Settings,
  Lock,
  Cpu,
  Database,
  Activity,
  BookMarked,
  Menu,
  X,
  Globe,
  Bot,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const SLIDE_LEFT = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const SLIDE_RIGHT = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'What is SMS?', href: '#what-is-sms' },
  { label: 'Choose Version', href: '#product-choice' },
  { label: 'About Us', href: '#about' },
];

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVersion, setActiveVersion] = useState('offline');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20 selection:text-primary">

      {/* ── Navigation ─────────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border/40 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/school-foundry/logo.svg" alt="SchoolFoundry" className="h-10 w-auto" />
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-foreground' : 'text-white'}`}>School<span className={`font-normal ${scrolled ? 'text-foreground' : 'text-white'}`}>Foundry</span></span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className={`transition-colors duration-300 hover:text-primary ${scrolled ? 'text-foreground' : 'text-white/90'}`}>{label}</a>
            ))}
            <a href="#contact" className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
              Request a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-foreground hover:bg-border/30' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border/40 px-5 py-6 flex flex-col gap-1"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="text-foreground/80 hover:text-primary font-medium py-3 px-3 rounded-xl hover:bg-primary/5 transition-colors text-base"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 bg-primary text-white px-5 py-3 rounded-full font-bold text-center hover:bg-primary/90 transition-all"
              >
                Request a Demo
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0D14] pt-20">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(249,115,22,0.13),transparent_70%)] pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 min-h-[calc(100vh-5rem)]">

            {/* Left copy */}
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="flex flex-col justify-center">
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-7 font-mono text-xs sm:text-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                Complete SMS for the African Market.
              </motion.div>

              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter text-white mb-5 leading-[1.05]">
                {activeVersion === 'offline' ? 'Kicking Paper Out of ' : 'Connected '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  School Management
                </span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-base sm:text-lg text-gray-400 mb-4 max-w-xl leading-relaxed">
                {activeVersion === 'offline' 
                  ? "Move from receipt books to a robust desktop SMS that works 100% offline. No internet required, just pure efficiency for your school office."
                  : "Experience the full power of a cloud-based SMS. Access your school records from any device, anywhere in the world, with real-time sync."}
              </motion.p>

              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 mb-9 text-sm text-gray-500">
                <Cpu className="w-4 h-4 text-primary flex-shrink-0" />
                <span>One-off Offline Bundle + Future Cloud Roadmap.</span>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 mb-12">
                <motion.a
                  href="#contact"
                  data-testid="link-hero-cta"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-4 bg-primary text-white rounded-full font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] text-center"
                >
                  Request a Demo
                </motion.a>
                <motion.a
                  href="#product-choice"
                  data-testid="link-hero-explore"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-base sm:text-lg border border-white/10 transition-all text-center"
                >
                  Choose Your Version
                </motion.a>
              </motion.div>

              <motion.div variants={FADE_UP} className="grid grid-cols-3 gap-4 pt-7 border-t border-white/10">
                {[
                  ['90%', 'Less Admin Time'],
                  ['One-Click', 'Backup'],
                  ['Instant', 'Statements'],
                ].map(([stat, label], i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-mono">{stat}</span>
                    <span className="text-xs text-gray-500 mt-1">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right sphere — desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center h-[580px]"
            >
              <div className="w-[480px] h-[480px]">
                <SphereCanvas />
              </div>

              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute top-6 left-0 bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <ReceiptText className="w-4 h-4 text-primary" />
                  <p className="text-primary font-bold font-mono text-sm">Record + Print</p>
                </div>
                <p className="text-gray-400 text-xs">Payment recorded. Receipt printed.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, x: 2 }}
                className="absolute top-[28%] right-0 bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-primary" />
                  <p className="text-primary font-bold font-mono text-sm">Statements</p>
                </div>
                <p className="text-gray-400 text-xs">Student, grade and school level</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: 2 }}
                className="absolute bottom-10 left-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-2xl px-5 py-4 shadow-xl cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-primary" />
                  <p className="text-primary font-bold font-mono text-sm">Lightweight</p>
                </div>
                <p className="text-gray-400 text-xs">Works on any PC that runs Chrome</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, x: 2 }}
                className="absolute bottom-[28%] right-0 bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl cursor-default"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Database className="w-4 h-4 text-primary" />
                  <p className="text-primary font-bold font-mono text-sm">Full Data Control</p>
                </div>
                <p className="text-gray-400 text-xs">Offline. Yours. Always backed up.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What is an SMS? ────────────────────────────────── */}
      <section id="what-is-sms" className="py-20 sm:py-32 bg-background border-y border-border/10">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-primary font-mono text-sm font-bold uppercase tracking-wider">The Foundation of Modern Schools</motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">What is a <span className="text-primary">School Management System?</span></motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-gray-600 text-lg leading-relaxed">
              An SMS is the digital heart of a school. It replaces paper registers, receipt books, and physical filing cabinets with a unified database. It automates administrative tasks, providing real-time insights into your school's health.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Student Information',
                desc: 'Digital records for every student, including enrollment dates, grade history, and personal details.'
              },
              {
                icon: ReceiptText,
                title: 'Financial Control',
                desc: 'Track every school fee payment, balance, and discount. Eliminate manual counting and receipt books.'
              },
              {
                icon: BarChart3,
                title: 'Reporting & Analytics',
                desc: 'Generate instant grade-wise or school-wide reports to see exactly where your finances stand.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SCALE_IN}
                className="bg-white/5 border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dual Path Tabs ─────────────────────────────────── */}
      <section id="product-choice" className="py-20 sm:py-32 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-5 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5">Choose Your <span className="text-primary">Journey</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Whether you are starting offline or ready for the cloud, we have a version of SchoolFoundry built for you.</p>
          </motion.div>

          <Tabs value={activeVersion} onValueChange={setActiveVersion} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 p-1 h-16 rounded-2xl mb-16">
              <TabsTrigger value="offline" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white transition-all text-xl font-bold">
                SchoolFoundry - Offline
              </TabsTrigger>
              <TabsTrigger value="online" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white transition-all text-xl font-bold">
                SchoolFoundry - Online (Coming Soon)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="offline" className="space-y-20">
              {/* Full Offline Landing Page Fragment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6 font-mono text-xs uppercase tracking-widest">
                    Ready to Deploy
                  </div>
                  <h3 className="text-4xl font-bold mb-6 leading-tight">Zero Internet. <br/>Zero Excuses.</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Designed for schools where internet is a luxury, not a guarantee. SchoolFoundry Offline lives entirely on your office computer. It captures the speed of digital without the risk of the cloud.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {[
                      { icon: Printer, title: 'Hardware Included', text: 'Comes with a thermal printer & 10 paper rolls.' },
                      { icon: HardDrive, title: 'Local Storage', text: 'All your data stays in your office, under your control.' },
                      { icon: Zap, title: 'Instant Receipts', text: 'Print professional receipts in under 3 seconds.' },
                      { icon: ListOrdered, title: 'Simple Rosters', text: 'Manage students and grades with ease.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold" asChild>
                    <a href="#contact">Get Offline Demo</a>
                  </Button>
                </motion.div>

                <div className="relative">
                  <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Printer className="w-64 h-64" />
                    </div>
                    <h4 className="text-2xl font-bold mb-8">What's in the Box?</h4>
                    <div className="space-y-8 relative z-10">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Thermal Receipt Printer</p>
                          <p className="text-sm text-gray-400">Industry standard high-speed thermal printing. No ink cartridges required—ever.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center font-bold text-xl flex-shrink-0">10</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Receipt Paper Rolls</p>
                          <p className="text-sm text-gray-400">Included to cover your first few months of operations. Refills available at any local paper shop.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-bold mb-1">Lifetime Software License</p>
                          <p className="text-sm text-gray-400">One-off payment. The software is yours forever. No monthly subscriptions or hidden fees.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offline Features Grid (Condensed) */}
              <div className="pt-20 border-t border-white/5">
                <div className="text-center mb-12">
                  <h4 className="text-2xl font-bold">Comprehensive Offline Features</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Users, title: 'Student Management' },
                    { icon: ReceiptText, title: 'Fast Receipting' },
                    { icon: FileText, title: 'Account Statements' },
                    { icon: XCircle, title: 'Defaulter Lists' },
                    { icon: CheckCircle, title: 'Cleared Lists' },
                    { icon: Activity, title: 'Activity Logs' },
                    { icon: Settings, title: 'Custom Fee Tiers' },
                    { icon: Database, title: 'Easy Backup' },
                  ].map((f, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                      <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-bold text-sm">{f.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="online" className="space-y-20">
              {/* Full Online Landing Page Fragment */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 font-mono text-xs uppercase tracking-widest">
                    Next Generation
                  </div>
                  <h3 className="text-4xl font-bold mb-6 leading-tight">Your School, <br/>On Any Device.</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    When you are ready for the cloud, SchoolFoundry Online unlocks the full potential of your SMS. Real-time data sync, parent engagement portals, and automated reporting accessible from any browser.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {[
                      { icon: Globe, title: 'Web Access', text: 'Secure login from mobile, tablet, or laptop.' },
                      { icon: Mail, title: 'Parent Alerts', text: 'Automated SMS/Email notifications for payments.' },
                      { icon: UserPlus, title: 'Parent Portal', text: 'Self-service statement downloads for parents.' },
                      { icon: Database, title: 'Cloud Sync', text: 'Automatic offsite backups and multi-user sync.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-sm">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-white/20 hover:bg-white/10" asChild>
                    <a href="#contact">Join the Waitlist</a>
                  </Button>
                </motion.div>

                <div className="relative">
                  <div className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-10 overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                      <Bot className="w-64 h-64 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-8">Phased Development</h4>
                    <div className="space-y-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">P1</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Cloud Core & Sync</p>
                          <p className="text-xs text-gray-400">Migrate offline data to the cloud. Real-time multi-staff coordination across devices.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">P2</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Payment Integrations</p>
                          <p className="text-xs text-gray-400">Connect Bank, Mobile Money, and EcoCash accounts. Automatically detect, classify, and match payments to students.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">P3</div>
                        <div>
                          <p className="text-lg font-bold mb-1">WhatsApp & Chatbot</p>
                          <p className="text-xs text-gray-400">Parents receive statements via WhatsApp. Manage a school chatbot directly from SchoolFoundry to answer parent queries 24/7.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 opacity-70">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 font-bold flex-shrink-0">P4</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Parent & Staff Portal</p>
                          <p className="text-xs text-gray-400">Dedicated login for parents to check balances and download reports without calling the office.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 opacity-50">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gray-400 font-bold flex-shrink-0">P5</div>
                        <div>
                          <p className="text-lg font-bold mb-1">AI Bursar Assistant</p>
                          <p className="text-xs text-gray-400">Ask a Bot to "Find Grade 5 unpaids" or "Analyze Term 1 trends" and get instant results.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Online Roadmap highlights */}
              <div className="pt-20 border-t border-white/5">
                <div className="text-center mb-12">
                  <h4 className="text-2xl font-bold">Planned Online Capabilities</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Bot, title: 'AI Assistant', desc: 'Predictive analytics' },
                    { icon: Code, title: 'Open API', desc: 'Integrate other apps' },
                    { icon: Globe, title: 'Parent Login', desc: 'Self-service' },
                    { icon: Zap, title: 'Instant Sync', desc: 'Real-time data' },
                  ].map((f, i) => (
                    <div key={i} className="bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center">
                      <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-bold text-sm mb-1">{f.title}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-14 sm:mb-20 max-w-3xl">
            <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">
              {activeVersion === 'offline' ? 'Offline Capabilities' : 'Cloud Features'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mt-3 mb-5">
              {activeVersion === 'offline' 
                ? 'Everything You Need, Locally' 
                : 'Unlocking the Power of the Cloud'}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              {activeVersion === 'offline'
                ? 'SchoolFoundry Offline is purpose-built for reliability. Every feature below is included out of the box, ensuring your office never skips a beat, even without internet.'
                : 'SchoolFoundry Online brings your school into the future. Real-time data, parent engagement portals, and AI-driven insights accessible from any device.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeVersion === 'offline' ? (
              // Offline Features
              <>
                <div className="md:col-span-2 bg-foreground text-white rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-full group-hover:bg-primary/15 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                      <Printer className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Thermal Receipt Printing</h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                      Instant, inkless printing for every payment. Professional receipts handed to parents on the spot, with zero delay.
                    </p>
                  </div>
                </div>
                <div className="bg-primary text-white rounded-3xl p-8 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Local Database</h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      Your data stays in your office. 100% private, 100% fast, and 100% yours.
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Staff Management</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Unlimited office staff accounts with individual access controls.</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-white border border-border rounded-3xl p-8 relative overflow-hidden shadow-sm transition-all duration-300 group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FileText className="w-48 h-48 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Print Statements at Every Level</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                      Generate and print account statements for any individual student, an entire grade, or the whole school in one click.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Online Features
              <>
                <div className="md:col-span-2 bg-primary text-white rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 rounded-full group-hover:bg-white/15 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Any-Device Web Access</h3>
                    <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                      Bursars can record payments on a laptop while the Headmaster checks the financial dashboard from their phone at home.
                    </p>
                  </div>
                </div>
                <div className="bg-foreground text-white rounded-3xl p-8 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">AI Bursar Assistant</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Ask your SMS questions like "What is the expected vs actual revenue for Term 1?" and get instant answers.
                    </p>
                  </div>
                </div>
                <div className="bg-white border border-border rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Parent SMS Alerts</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Automatically notify parents via WhatsApp or SMS the moment a payment is recorded.</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-white border border-border rounded-3xl p-8 relative overflow-hidden shadow-sm transition-all duration-300 group">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Code className="w-48 h-48 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Open API for Extensions</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                      Connect your school's bank feeds, website, or other educational tools directly to your financial core.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ── Static Core Capabilities ───────────────────────── */}
          <div className="mt-20 pt-20 border-t border-border/10">
            <div className="text-center mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Core SMS Capabilities</h3>
              <p className="text-gray-500 max-w-2xl mx-auto">Standard features included in all versions of SchoolFoundry, providing a robust foundation for your school's administration.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: ListOrdered, label: 'Student Enrollment', desc: 'Manage new intakes and student files.' },
                { icon: ReceiptText, label: 'Invoicing', desc: 'Generate bills for terms and activities.' },
                { icon: Activity, label: 'Audit Trails', desc: 'Track every action for total accountability.' },
                { icon: UserPlus, label: 'Staff Management', desc: 'Control access levels for office staff.' },
                { icon: FileText, label: 'Statements', desc: 'Instant student and grade-level reports.' },
                { icon: GraduationCap, label: 'Grading History', desc: 'Track performance across years.' },
                { icon: Database, label: 'Secure Backups', desc: 'Never lose a single record again.' },
                { icon: Lock, label: 'Data Security', desc: 'Industry-standard encryption for records.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.label}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us ───────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_LEFT}>
                <span className="text-primary font-mono text-sm font-bold uppercase tracking-wider">About Us</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-6">Built by People Who <span className="text-primary">Understand the Problem</span></h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
                  SchoolFoundry is developed by <strong>Jiggabyte Technology Limited</strong>, a technology company based in Lusaka, Zambia. We build practical software for African institutions, tools that work in the real conditions schools face every day.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  We know that most schools in the region run on paper, deal with unreliable internet, and do not have an IT department. SchoolFoundry was designed with all of that in mind. A lightweight desktop app that works offline, is simple to use, and does not require ongoing subscriptions or technical support to maintain.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: MapPin, text: 'Based in Lusaka, Zambia. Serving schools across Southern Africa.' },
                    { icon: Target, text: 'Focused on practical tools that work without reliable internet.' },
                    { icon: Heart, text: 'Built with African school office staff in mind, from day one.' },
                  ].map(({ icon: Icon, text }, i) => (
                    <motion.div key={i} whileHover={{ x: 4 }} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_RIGHT}>
                <div className="bg-foreground rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-7">
                      <img src="/school-foundry/logo.svg" alt="SchoolFoundry" className="h-10 w-auto" />
                      <span className="text-xl sm:text-2xl font-bold text-white">School<span className="font-normal">Foundry</span></span>
                    </div>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 italic">
                      "We wanted to build something that office staff at a rural Zambian school could pick up and use on day one, without training, without internet, and without a monthly bill."
                    </p>
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-primary font-bold">Jiggabyte Technology Limited</p>
                      <p className="text-gray-400 text-sm mt-1">Lusaka, Zambia</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ──────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 md:p-20 shadow-2xl flex flex-col md:flex-row gap-12 sm:gap-16 items-start md:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_LEFT} className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">Ready to Make School Fees Admin Easy?</h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-7">Get in touch and we will walk you through exactly how SchoolFoundry works. No pressure, no commitment.</p>
              <div className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                {[
                  'One-off payment, no monthly subscription',
                  'Works offline. No internet needed.',
                  'Simple setup, no IT team required',
                  'Detailed documentation included',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0">✓</div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={SLIDE_RIGHT} className="flex-1 w-full">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">School Name</label>
                    <Input data-testid="input-school-name" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="Riverside High School" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Your Name</label>
                    <Input data-testid="input-your-name" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="Themba Moyo" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <Input data-testid="input-email" type="email" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="bursar@school.co.zm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <Input data-testid="input-phone" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="+260 97 123 4567" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Approx. Student Count</label>
                    <Input data-testid="input-student-count" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="e.g. 500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">School Location (City)</label>
                    <Input data-testid="input-school-location" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white h-12" placeholder="e.g. Lusaka" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Anything else we should know?</label>
                  <Textarea data-testid="textarea-school-info" className="bg-gray-50 border-transparent focus-visible:ring-primary focus-visible:bg-white min-h-[90px] resize-none" placeholder="What are you currently using to manage school fees? Any specific concerns?" />
                </div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                  <Button data-testid="button-submit-demo" className="w-full h-13 text-lg font-bold rounded-xl mt-3" size="lg">
                    Request a Demo
                  </Button>
                </motion.div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  We will show you exactly how SchoolFoundry works for your school.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-[#05080F] text-gray-400 pt-14 pb-8 border-t border-white/5">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/school-foundry/logo.svg" alt="SchoolFoundry" className="h-10 w-auto" />
                <span className="font-bold text-xl tracking-tight text-white">School<span className="font-normal">Foundry</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-5 max-w-xs text-sm">
                Forging a Stronger Financial Future for Schools. Simple, reliable school fees management software built for Southern African schools.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="mailto:info@jiggabyte.co.zm" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  info@jiggabyte.co.zm
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  Lusaka, Zambia
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigation</h4>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { label: 'Offline Bundle', href: '#offline' },
                  { label: 'Product Roadmap', href: '#roadmap' },
                  { label: 'About Us', href: '#about' },
                  { label: 'Request a Demo', href: '#contact' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-primary transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-primary" /> {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h4>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="hover:text-white transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-primary" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} SchoolFoundry. All rights reserved.</p>
            <p>
              Developed by{' '}
              <span className="text-primary font-semibold">Jiggabyte Technology Limited</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
